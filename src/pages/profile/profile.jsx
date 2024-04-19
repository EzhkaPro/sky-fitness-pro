import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { Logo } from '../../components/Logo.jsx'
import * as S from './profile.styles.js'
import { PersonalData } from '../../components/PersonalData/PersonalData'
import { UpdateUserData } from '../../components/update-user/update-user.jsx'
import { useEffect, useState } from 'react'
import { SelectWorkoutPopup } from './SelectWorkoutPopup'
import { useAuth } from '../../components/hooks/useAuth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { idSelector } from '../../components/store/selectors/user.js'
import { useSelector } from 'react-redux'

import close from './img/close.png'
import open from './img/open.png'

export function Profile({ cources, logOut, workoutsFirebase, password }) {
  const navigate = useNavigate()
  const { email } = useAuth()
  const userId = useSelector(idSelector)

  const [listSelectedCourse, setListSelectedCourse] = useState([])
  const [showPopup, setShowPopup] = useState(false)

  const [isLoginMode, setIsLoginMode] = useState(null)
  const [loginShow, setLoginShow] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [userFirebase, setUserFirebase] = useState([])

  // Стейт для показа пароля
  const [showPassword, setShowPassword] = useState(true)

  // Функция для обработки клика на изображении
  const handleImageClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  // UPDATE LOG AND PASS

  const handleLoginClick = () => {
    setLoginShow(!loginShow)
    setIsLoginMode(true)
  }
  const handlePasswordClick = () => {
    setPasswordShow(!passwordShow)
    setIsLoginMode(false)
  }

  useEffect(() => {
    if (loginShow || passwordShow) {
      setIsActive(true)
    }
  }, [loginShow, passwordShow])

  // загрузка профиля при открытии страницы
  async function getUserProfile(userId) {
    const userWorkoutRef = firebase.database().ref('users/' + userId)
    await userWorkoutRef.once('value').then((snapshot) => {
      setUserFirebase(snapshot.val())
    })
  }

  useEffect(() => {
    if (!userId) {
      navigate('/auth')
      return
    } else if (!userFirebase) {
      console.log('not Courses')
      console.log(userFirebase)
    } else {
      getUserProfile(userId)
    }
  }, [])

  // USER COURSES

  const userCourseIds = !userFirebase.courses
    ? []
    : Object.keys(userFirebase.courses).map(
        (key) => userFirebase.courses[key].courseId
      )

  const coursesWithImgs = cources
    .filter((course) => userCourseIds.indexOf(course._id) >= 0)
    .map((course) => {
      return {
        ...course,
        img: `${course.nameEN}.png`,
      }
    })

  const SelectCourseWorkout = (courseId) => {
    let courseWorkoutIds = cources.filter(
      (course) => course._id === courseId
    )[0].workouts
    setListSelectedCourse(
      courseWorkoutIds.map((workoutId) => {
        let workoutObject = workoutsFirebase.filter(
          (workout) => workout._id === workoutId
        )[0]
        let name = ''
        let nameDescription = ''
        if (workoutObject.name.indexOf('/') >= 0) {
          name = workoutObject.name.substring(
            0,
            workoutObject.name.indexOf('/') - 1
          )
          nameDescription = workoutObject.name.substring(
            workoutObject.name.indexOf('/') + 2,
            workoutObject.name.lastIndexOf('/') - 1
          )
        } else {
          name = workoutObject.name
          nameDescription = ''
        }

        return {
          ...workoutObject,
          name,
          nameDescription,
          isComplete: userFirebase.workouts[workoutId].isComplete,
        }
      })
    )

    setShowPopup(!showPopup)
  }

  return (
    <S.Container>
      <S.MainPage>
        <S.HeaderPage>
          <Logo theme="white" />
          <PersonalData logOut={logOut} email={email} />
        </S.HeaderPage>
        <div>
          <S.TitlePage>Мой профиль</S.TitlePage>
          <S.InfoUser>Логин: {email}</S.InfoUser>

          <S.PassContainer>
            <S.InfoUser>
              Пароль: {showPassword ? '••••••' : password}{' '}
            </S.InfoUser>
            <S.HeaderImgEye
              src={showPassword ? close : open}
              alt={showPassword ? 'close_password' : 'open_password'}
              onClick={handleImageClick}
            />
          </S.PassContainer>
          
        </div>
        <S.ButtonChangeLog>
          <S.LoginButton onClick={() => handleLoginClick()}>
            Редактировать логин
          </S.LoginButton>
        </S.ButtonChangeLog>
        <S.ButtonChangePass>
          <S.LoginButton onClick={() => handlePasswordClick()}>
            Редактировать пароль
          </S.LoginButton>
        </S.ButtonChangePass>
        <S.TitleCourses>
          <S.TitleCoursesText>Мои курсы</S.TitleCoursesText>
        </S.TitleCourses>
        <S.CoursesCards>
          {coursesWithImgs.length > 0 ? (
            <S.ProfList>
              {coursesWithImgs.map((course, index) => (
                <S.Prof key={index} id={course._id}>
                  <S.ProfCard
                    src={'/CardsCourses/' + course.img}
                    alt="prof_card"
                    onClick={() => {
                      SelectCourseWorkout(course._id)
                    }}
                  ></S.ProfCard>

                  <S.ProfButton
                    onClick={() => {
                      SelectCourseWorkout(course._id)
                    }}
                  >
                    Перейти →
                  </S.ProfButton>
                </S.Prof>
              ))}
            </S.ProfList>
          ) : (
            <p>У вас пока нет купленных курсов</p>
          )}
        </S.CoursesCards>
        {isActive && (
          <UpdateUserData isLoginMode={isLoginMode} setIsActive={setIsActive} />
        )}
      </S.MainPage>
      {showPopup && (
        <SelectWorkoutPopup
          onClose={showPopup}
          list={listSelectedCourse}
          callbackToClose={() => {
            setShowPopup(false)
          }}
        />
      )}
    </S.Container>
  )
}
