import styled from 'styled-components'

export const ProgressTitle = styled.div`
  color: rgb(0, 0, 0);
  font-family: StratosSkyeng;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0%;
  text-align: center;
  margin-top: 36px;
  font-variant-numeric: lining-nums proportional-nums;
`

export const ProgressBox = styled.div`
  border-radius: 30px;
  background: rgb(242, 242, 242);
  width: 638px;
  padding-bottom: 20px;
`

export const ProgressInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    color: black;
    margin-top: 40px;
    padding-left: 40px;
    padding-right: 50px;
    lement.style 
       
    
`
export const ProgressItem = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
`
export const ProgressItemName = styled.div`
  width: 190px;
  color: rgb(0, 0, 0);
  font-family: StratosSkyeng;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0%;
  text-align: left;
`
//ОТ ЛАНЫ

export const TrainingProgressInPercentage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 44px;
  padding-right: 55px;
`
export const TrainingProgressElement = styled.p`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  width: 227px;
`

export const TrainingProgressInput = styled.button`
  width: 278px;
  height: 36px;
  border-radius: 22px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.value === '100%' ? '278px' : props.value)};
    background: #565eef;
    height: 34px;
    border-radius: ${(props) =>
      props.value === '100%' ? '22px' : '22px 0px 0px 22px'};
  }
`

export const TrainingProgressInputBox = styled.div`
  position: relative;
`
export const TrainingProgressInputPercentage = styled.p`
  position: absolute;
  top: 1px;
  left: ${(props) =>
    props.value <= 30 && props.value !== 0
      ? '0'
      : props.value > 50 || props.value === 0
      ? '112px'
      : '50px'};
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  z-index: 1;
`

export const ProgressInputForExerciseFirst = styled(TrainingProgressInput)`
  border: 2px solid #565eef;
  background: #edecff;

  &::before {
    background: #565eef;
    content: '';
    width: ${(props) => props.value};
  }
`

export const TrainingProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 26px;
  padding-bottom: 32px;
  padding-top: 32px;
`
export const Modal = styled.div`
  background-color: #fff; /* Цвет фона модального окна */
  padding: 20px;
  border-radius: 15px;
`

export const Input = styled.input`
  font-family: StratosSkyeng;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05000000074505806px;
  text-align: left;
  border: none;
  outline: none;
  border-bottom: 1px #d0cece solid;
  width: 100%;
  margin-top: 10px;
  padding: 5px;
`
