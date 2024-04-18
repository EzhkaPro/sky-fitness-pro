
import { useNavigate } from 'react-router';
import * as S from './SelectWorkoutPopup.styles'

export const SelectWorkoutPopup = ({ list, callbackToClose }) => {
  const navigate = useNavigate();

  const openWorkout = (workoutId) =>{
    navigate("/users/workouts/" + workoutId)
  };

  return (
    <>
      <S.PoupLayout onClick={()=> callbackToClose()}/>
      <S.SelectWorkoutContainer>
        <S.SelectWorkoutHeader>
          <S.SelectWorkoutTitle>Выберите тренировку</S.SelectWorkoutTitle>
        </S.SelectWorkoutHeader>
        <S.SelectWorkoutBody>
          <S.SelectWorkoutList>
            {list.map(item=> item.isComplete === true
              ?(<>
                <S.SelectWorkoutItemComplete onClick={()=> openWorkout(item._id)}>
                  <S.SelectWorkoutItemNameContainer>
                    <S.SelectWorkoutItemNameComplete> {item.name} </S.SelectWorkoutItemNameComplete>
                    <S.WorkoutCheckComplete src="/complete.svg" alt="complete" />
                  </S.SelectWorkoutItemNameContainer>

                  {item.nameDescription && (<S.SelectWorkoutItemDescrComplete>{item.nameDescription}</S.SelectWorkoutItemDescrComplete>)}
                  </S.SelectWorkoutItemComplete>
                
              </>)
              :(<S.SelectWorkoutItem onClick={()=> openWorkout(item._id)}>
                <S.SelectWorkoutItemName>{item.name}</S.SelectWorkoutItemName>
                {item.nameDescription && (<S.SelectWorkoutItemDescr>{item.nameDescription}</S.SelectWorkoutItemDescr>)}
              </S.SelectWorkoutItem>)
              )}
          </S.SelectWorkoutList>
        </S.SelectWorkoutBody>
      </S.SelectWorkoutContainer>
    </>
  )
};