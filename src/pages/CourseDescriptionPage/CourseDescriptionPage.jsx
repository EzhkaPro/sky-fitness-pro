import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Logo from '../../components/CourseDescriptionPage/Logo/Logo'
import CourseInformation from '../../components/CourseDescriptionPage/CourseInformation/CourseInformation'
import Bid from '../../components/CourseDescriptionPage/Bid/Bid'
import * as S from './CourseDescriptionPage.style'
import { getDatabase, ref, set, update } from 'firebase/database'
import { useSelector, useDispatch } from 'react-redux'
import { idSelector } from '../../components/store/selectors/user'
import { setCourseList } from '../../components/store/slices/coursesWorkoutSlice'
import { getCurrentUser } from '../../api'
import { setFullCurrentUser } from '../../components/store/slices/userSlice'

const CourseDescriptionPage = ({ courses, workouts }) => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const course = courses.find((c) => c._id === courseId) || {
    _id: '1',
    nameRU: 'Йога',
    nameEN: 'Yoga',
    fitting: [
      'Давно хотели попробовать йогу, но не решались начать.',
      'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
      'Ищете активность, полезную для тела и души.',
    ],
    directions: [
      'Йога для новичков',
      'Классическая йога',
      'Йогатерапия',
      'Кундалини-йога',
      'Хатха-йога',
      'Аштанга-йога',
    ],
    description:
      'Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.',
  }

  const id = useSelector(idSelector)
  console.log(id)

  const addCourse = () => {
    if (!id) {
      navigate('/auth')
      return
    }
    // const loggedAddCourse = () => {

    //получить id пользователя из localStorage
    // const id = JSON.parse(localStorage.getItem('user')).id
    // console.log(id)

    async function postCourseId(courseId) {
      try {
        const db = getDatabase()

        const courseRef = ref(db, 'users/' + id + '/courses/' + courseId)
        set(courseRef, {
          courseId,
        })

        course.workouts.forEach((workoutId) => {
          const workoutsRef = ref(db, 'users/' + id + '/workouts/' + workoutId)
          let workout = {
            workoutId,
            isComplete: false,
          }
          if (
            workouts.filter((workout) => workout._id === workoutId)[0].exercices
          ) {
            workout.exercices = workouts.filter(
              (workout) => workout._id === workoutId
            )[0].exercices
          }
          set(workoutsRef, workout)
        })

        console.log('Course ADDED')
      } catch (error) {
        console.error('Ошибка при добавлении пользователя курс', error)
      }
    }

    const updateUserDetails = () => {
      getCurrentUser(id).then((currentUser) => {
        dispatch(setFullCurrentUser(currentUser))
      })
    }

    const result = window.confirm(
      'Благодарим за покупку курса! Теперь он будет отображаться в вашем профиле. Удачных тренировок!'
    )

    if (result === true) {
      postCourseId(courseId)
      updateUserDetails()
      
      navigate('/profile')
    } else postCourseId(courseId)
  }

  return (
    <S.CourseDescriptionPage>
      <Logo />
      <CourseInformation {...course} />
      <Bid addCourse={addCourse} />
    </S.CourseDescriptionPage>
  )
}

export default CourseDescriptionPage
