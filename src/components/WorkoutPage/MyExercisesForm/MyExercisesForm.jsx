import { useState } from 'react'
import * as S from './MyExercisesForm.styles'
import CountedProgress from '../progress-counted/progress-counted'
import { useSelector } from 'react-redux'

import { getDatabase, ref, update } from 'firebase/database'
import { idSelector } from '../../store/selectors/user'
const FORM_STATE_IN_PROCESS = 'FORM_STATE_IN_PROCESS'
const FORM_STATE_COMPLETE = 'FORM_STATE_COMPLETE'

export const MyExercisesForm = ({
  listExercises, // workoutId.exercises - упражнения по выбранному воркауту без progress не из БД
  myWorkout, // полностью выбранный воркаут, { exercises[{},{}], workoutId, isComplete }
  updateCompleteCallback,
}) => {
  const [progressValuesChange, setProgressValuesChange] = useState(
    new Array(listExercises.length).fill('')
  )

  const id = useSelector(idSelector) // id пользователя
  let fieldValidation //Флаг на проверку превышения количества повторений

  // написать функцию добавления данных в БД через метод update
  async function incrementProgressAndUpdateDB() {
    fieldValidation = true //Флаг на проверку превышения количества повторений

    const parsedProgress = progressValuesChange.map((element) => {
      const newChange = parseInt(element)
      if (newChange < 0) {
        fieldValidation = false
        alert('Количество выполненных упражнений не может быть отрицательным')
      }
      return newChange
    })
    if (!fieldValidation) {
      return
    }

    myWorkout.isComplete = true
    myWorkout.exercises.forEach((myExercise, index) => {
      const delta = parsedProgress[index]
      myExercise.progress += delta

      // console.log(delta)

      // проверка валидация

      if (delta > myExercise.quantity) {
        fieldValidation = false
        alert('Количество выполненных упражнений не может быть больше')
      } else if (delta < 0) {
        fieldValidation = false
        alert('Количество выполненных упражнений не может быть отрицательным')
      } else {
        fieldValidation = true
      }

      if (myExercise.progress < myExercise.quantity) {
        myWorkout.isComplete = false
      }
    })

    const db = getDatabase()
    const exerciseRef = ref(db, `users/${id}/workouts/${myWorkout.workoutId}`)
    update(exerciseRef, { exercises: myWorkout.exercises })
    update(exerciseRef, { isComplete: myWorkout.isComplete })
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formState, setFormState] = useState(FORM_STATE_IN_PROCESS)
  const [isErrorExist, setIsErrorExist] = useState(false)
  const [isErrorValidate, setIsErrorValidate] = useState(false)

  const openModal = () => {
    setFormState(FORM_STATE_IN_PROCESS)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const sendProgress = () => {
    if (progressValuesChange.some((value) => value === '')) {
      setFormState(FORM_STATE_IN_PROCESS)
      setIsModalOpen(true)
      setIsErrorExist(true)
    } else if (fieldValidation === false) {
      setFormState(FORM_STATE_IN_PROCESS)
      setIsModalOpen(true)
      setIsErrorValidate(true)
    }
     else {
      setFormState(FORM_STATE_COMPLETE)
      setIsErrorExist(false)
      setIsErrorValidate(false)

      incrementProgressAndUpdateDB().then(() => {
        setProgressValuesChange(new Array(listExercises.length).fill(''))
      })

      setTimeout(() => {
        closeModal()
        updateCompleteCallback()
      }, 2000)
    }
  }

  return (
    <div>
      <S.Button onClick={openModal}>Заполнить свой прогресс</S.Button>
      {isModalOpen && formState === FORM_STATE_IN_PROCESS && (
        <>
          <S.PoupLayout
            onClick={() => {
              closeModal()
            }}
          />
          <S.Popup>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <S.PopupTitle>Мой прогресс</S.PopupTitle>
              {myWorkout.exercises.map((exercise, index) => {
                const exerciseText = exercise.name.split('(')

                return (
                  <S.PopupQuestionList key={index}>
                    <S.MyProgressText>
                      Сколько раз вы сделали {exerciseText[0].toLowerCase()}?
                    </S.MyProgressText>
                    <S.MyProgressInput
                      type="number"
                      placeholder="Введите значение"
                      value={progressValuesChange[index]}
                      onChange={(e) => {
                        const newProgressValues = [...progressValuesChange]
                        newProgressValues[index] = e.target.value
                        setProgressValuesChange(newProgressValues)
                      }}
                    ></S.MyProgressInput>
                  </S.PopupQuestionList>
                )
              })}
            </div>
            <S.PopupButton onClick={sendProgress}>Oтправить</S.PopupButton>
            {isErrorExist ? (
              <S.ErrorText>Все поля должны быть заполнены!</S.ErrorText>
            ) : null}
            {isErrorValidate ? (
              <S.ErrorText>Неправильно введены данные.</S.ErrorText>
            ) : null}
          </S.Popup>
        </>
      )}
      {isModalOpen && formState === FORM_STATE_COMPLETE && fieldValidation && (
        <>
          <S.PoupLayout
            onClick={() => {
              closeModal()
            }}
          />
          <CountedProgress
            tittle="Ваш прогресс засчитан!"
            closeModal={closeModal}
          />
        </>
      )}
    </div>
  )
}
