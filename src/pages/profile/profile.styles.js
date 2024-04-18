import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
* {
    margin: 0;
    padding: 0;
    font-weight: 100px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
`

export const MainPage = styled.div`
  width: 1160px;
  padding-left: 140px;
  padding-right: 140px;
  padding-top: 30px;
`

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const TitlePage = styled.h1`
  font-size: 48px;
  font-weight: 400px;
  padding-top: 56px;
  padding-bottom: 40px;
  font-family: "StratosSkyeng";
`

export const InfoUser = styled.h1`
  font-size: 24px;
  font-weight: 400px;
  padding-bottom: 20px;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
`

export const ButtonChangeLog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 14px;

  :hover {
    background-color: #3f007d;
  }

  :active {
    background-color: #271a58;
  }
`

export const LoginButton = styled.button`
  background-color: #580ea2;
  color: white;
  font-size: 18px;
  box-sizing: border-box;
  border: none;
  height: 52px;
  min-width: 275px;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  cursor: pointer;
  cursor: pointer;
`

export const ButtonChangePass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 14px;
  cursor: pointer;

  :hover {
    background-color: #3f007d;
  }

  :active {
    background-color: #271a58;
  }
`

export const TitleCourses = styled.div`
  padding-top: 70px;
`

export const TitleCoursesText = styled.h1`
  font-size: 48px;
  font-family: "StratosSkyeng";
`

export const CoursesCards = styled.div`
display: flex;
padding-top: 60px;
gap: 40px;
cursor: pointer;
`

export const Workout = styled.img`
  height: 480px;
  width: 360px;
  box-shadow: 0.4em -0.4em 40px #cdcdcd;
  border-radius: 30px;
`

export const buttonWork = styled.button`
  width: 136px;
  height: 36px;
  box-sizing: border-box;
  background-color: #c7e957;
  border: none;
  border-radius: 80px;
  font-size: 20px;
`
export const ProfCard = styled.img`
  width: 360px;
  height: 480px;
  left: 0px;
  top: 0px;
  border-radius: 30px;
  position: absolute;
  box-shadow: 0.4em -0.4em 40px #cdcdcd;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  @media (max-width: 1024px) {
    height: 400px;
    width: 300px;
  }

`
export const ProfList = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  flex-wrap:wrap;
  gap: 37px;
  margin-bottom: 300px;
`
export const Prof = styled.div`
  position: relative;
  width: 360px;
  height: 480px;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.5px;
  width: 360px;

  z-index: 1;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }

  :hover {
    box-shadow: 0.4em -0.4em 40px #C7E957;
}

:active {
    box-shadow: 0.4em -0.4em 40px #9ccc00;
}

`
export const ProfButton = styled.button`
  width: 136px;
  height: 43px;
  left: 30px;
  top: 410px;
  cursor: pointer;
  background: #c7e957;
  border-radius: 80px;
  font-family: 'StratosSkyeng', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
  position: absolute;
  border: none;
  @media (max-width: 1024px) {
    top: 340px;
  }
`
export const CourseName = styled.h2``
