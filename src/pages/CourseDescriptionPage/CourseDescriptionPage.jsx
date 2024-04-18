import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Logo } from '../../components/Logo.jsx'
import CourseInformation from '../../components/CourseDescriptionPage/CourseInformation/CourseInformation'
import Bid from '../../components/CourseDescriptionPage/Bid/Bid'
import * as S from './CourseDescriptionPage.style'
import { getDatabase, ref, set } from 'firebase/database'
import { useSelector } from 'react-redux'
import { idSelector } from '../../components/store/selectors/user'

const CourseDescriptionPage = ({ courses, workouts }) => {
  const { courseId } = useParams()
  const navigate = useNavigate()
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

  const addCourse = () => {
    if (!id) {
      navigate('/auth')
      return
    }

    async function postCourseId(courseId) {
      const db = getDatabase()

      const courseRef = ref(db, 'users/' + id + '/courses/' + courseId)
      set(courseRef, {
        courseId,
      })

      course.workouts.forEach((workoutId) => {
        const workoutsRef = ref(db, 'users/' + id + '/workouts/' + workoutId)
        let workout = {
          workoutId,
          isComplete: false
        };
        if(workouts.filter((workout) => workout._id === workoutId)[0].exercises){
          workout.exercises = workouts.filter((workout) => workout._id === workoutId)[0].exercises;
        }
        set(workoutsRef, workout)
      })
    }

    const result = window.confirm(
      'Благодарим за покупку курса! Теперь он будет отображаться в вашем профиле. Удачных тренировок!'
    )

    if (result === true) {
      postCourseId(courseId)

      navigate('/profile')
    } else postCourseId(courseId)
  }

  return (
    <S.Header>
      <S.CourseDescriptionPage>
        <Logo theme="white" />
        <CourseInformation {...course} />
        <Bid addCourse={addCourse} />
      </S.CourseDescriptionPage>
    </S.Header>
  )
}

export default CourseDescriptionPage
