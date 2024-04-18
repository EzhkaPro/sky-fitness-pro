import { Route, Routes, useNavigate } from 'react-router'
import { NotFound } from './pages/not-found/NotFound'
import { useEffect, useState } from 'react'
import { app } from './components/firebase/firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { WorkoutPage } from './pages/WorkoutPage/WorkoutPage'
import { MainPage } from './pages/main/MainPage'
import { Profile } from './pages/profile/profile'
import { Login } from './pages/login/login'
import { Register } from './pages/reg/Registration'
import { useDispatch } from 'react-redux'
import { removeUser } from './components/store/slices/userSlice'
import CourseDescriptionPage from './pages/CourseDescriptionPage/CourseDescriptionPage'

export const AppRoutes = () => {
  //workouts: наименование курса, видео, упражнения
  const [workoutsFirebase, setWorkoutsFirebase] = useState([])
  //courses: направления, описания, наименование на рус и англ, workouts
  const [coursesFirebase, setCoursesFirebase] = useState([])
  // данные авторизованного пользователя
  const [currentUserFirebase, setCurrentUserFirebase] = useState(null);

  useEffect(() => {
    const fb = firebase.database(app)
    const fetchData = async () => {
      try {
        const workoutsRef = fb.ref('workouts')
        await workoutsRef.once('value').then((snapshot) => {
          const trainings = Object.values(snapshot.val() || {})
          setWorkoutsFirebase(trainings)
        })
      } catch (error) {
        console.error('Error getting documents (workouts): ', error)
      }
    }
    fetchData()

    const fetchCoursesData = async () => {
      try {
        const coursesRef = fb.ref('courses')
        await coursesRef.once('value').then((snapshot) => {
          const trainings = Object.values(snapshot.val() || {})
          setCoursesFirebase(trainings)
        })
      } catch (error) {
        console.error('Error getting documents (courses): ', error)
      }
    }
    fetchCoursesData()
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const loginCallback = (userId) => {
    const fetchUsersData = async () => {
      try {
        const fb = firebase.database(app)
        const coursesRef = fb.ref('users')
        await coursesRef.once('value').then((snapshot) => {
          const users = Object.values(snapshot.val() || {});
          const currentUser = users.filter((user) => user._id === userId)[0]
          setCurrentUserFirebase(currentUser);

          navigate('/profile');
        })
      } catch (error) {
        console.error('Error getting documents (courses): ', error)
      }
    }
    fetchUsersData()
  };
  
  const logOut = () => {
    navigate('/auth');
    removeUser();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage courses={coursesFirebase} logOut={logOut} />}
      />
      <Route
        path="/auth"
        element={
          <Login
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            callback={loginCallback}
          />
        }
      />
      <Route
        path="/reg"
        element={
          <Register
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        }
      />

      <Route 
        path="/profile"
        element={<Profile 
          cources={coursesFirebase}
          logOut={logOut}
          userFirebase={currentUserFirebase}
          workoutsFirebase={workoutsFirebase}/>
          }
        />
      <Route
        path="/course/:courseId"
        element={<CourseDescriptionPage courses={coursesFirebase} workouts={workoutsFirebase} />}
      />
      <Route 
        path="/courses/"
        element={<NotFound />} />
      <Route 
        path="/users/courses"
        element={<NotFound />} />

      <Route
        path="/users/workouts/:workoutId"
        element={
          <WorkoutPage
            courses={coursesFirebase}
            workouts={workoutsFirebase}
            logOut={logOut}
          />
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
