import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as S from './WorkoutPage.styles'
import VideoPlayer from '../../components/WorkoutPage/VideoPlayer/VideoPlayer'
import { CourseExercises } from '../../components/WorkoutPage/CourseExercises/CourseExercises'
import { ProgressExercises } from '../../components/WorkoutPage/ProgressExercises/ProgressExercises'
import { HeaderVideo } from '../../components/WorkoutPage/Header/HeaderVideo'
import { MyExercisesForm } from '../../components/WorkoutPage/MyExercisesForm/MyExercisesForm'
import { idSelector } from '../../components/store/selectors/user'


import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { useEffect, useState } from 'react'

export const WorkoutPage = ({ courses, workouts, logOut }) => {
  async function getUserWorkout(userId)
  {
    const userWorkoutRef = firebase.database().ref('users/' + userId + '/workouts/' + params.workoutId);
    await userWorkoutRef.once('value').then((snapshot) => {
      setMyWorkout(snapshot.val());
    })
  }

  const navigate = useNavigate();
  const params = useParams()
  const userId = useSelector(idSelector)
  const [myWorkout, setMyWorkout] = useState(null);

  if(userId=== null){
    navigate('/auth');
  }

  useEffect(()=>{
    getUserWorkout(userId);
  }, []);

  if (!courses || !workouts || courses.length === 0 || workouts.length === 0) {
    return <></>
  }

  const course = courses.filter((item) =>
    item.workouts.includes(params.workoutId)
  )[0]
  if (!course) {
    return <h1>Неверный идентификатор курса</h1>
  }

  const workout = workouts.filter((workout) => workout._id === params.workoutId)[0];

  return (
    <>
      {workouts.length > 0 && (
        <S.Container>
          <HeaderVideo logOut={logOut} />
          <S.CourseTitle>{course.nameRU}</S.CourseTitle>
          <S.CourseDescribtion> {workout.name} </S.CourseDescribtion>
          <VideoPlayer srcVideo={workout.video} />
          {workout.exercises && (
            <S.ExercisesDetails>
              <div>
                <CourseExercises listExercises={workout.exercises} />
                {myWorkout!=null && <MyExercisesForm
                  listExercises={workout.exercises}
                  myWorkout={myWorkout}
                  updateCompleteCallback={()=>{getUserWorkout(userId)}}
                />}
              </div>
              {myWorkout!=null &&
              <ProgressExercises
                userId={userId}
                myWorkout={myWorkout}
              />}
            </S.ExercisesDetails>
          )}
        </S.Container>
      )}
      {(workouts?.length ?? 0) === 0 && <h1> нет данных</h1>}
    </>
  )
}
