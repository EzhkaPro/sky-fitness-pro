import * as S from './ProgressExercises.styles'

export const ProgressExercises = ({ myWorkout }) => {

  const getPercentageByValue = (exercise) => {
    exercise.progress = exercise.progress ?? 0

    let valueInPercentage

    let fieldValidation = true //Флаг на проверку превышения количества повторений

    if (exercise.quantity !== 0 && exercise.progress !== null) {
      valueInPercentage = Math.round(
        (exercise.progress / exercise.quantity) * 100
      )
    } else {
      valueInPercentage = 0
    }

    if (valueInPercentage > 100) {
      valueInPercentage = 100;
    }
    if (valueInPercentage < 0) {
      fieldValidation = false
    }
    
    if (fieldValidation) {
      return valueInPercentage
    }
  }

  const listExercises = myWorkout.exercises

  return (
    <S.ProgressBox>
      <S.ProgressTitle> Мой прогресс по тренировке 2:</S.ProgressTitle>
      <S.TrainingProgressBox>
        {listExercises &&
          listExercises.map((exercise, index) => {
            exercise.progress = exercise.progress ?? 0
            const exerciseText = exercise?.name ? exercise?.name.split('(') : ''
            const valueInPercentage = getPercentageByValue(exercise)
            return (
              <S.TrainingProgressInPercentage key={'progress-' + index}>
                <S.TrainingProgressElement>
                  {exerciseText[0]}
                </S.TrainingProgressElement>
                <S.TrainingProgressInputBox>
                  <S.ProgressInputForExerciseFirst value={valueInPercentage + '%'} />
                  <S.TrainingProgressInputPercentage value={parseInt(valueInPercentage)}>
                    {valueInPercentage + '%'}
                  </S.TrainingProgressInputPercentage>
                </S.TrainingProgressInputBox>
              </S.TrainingProgressInPercentage>
            )
          })}
      </S.TrainingProgressBox>
    </S.ProgressBox>
  )
}
