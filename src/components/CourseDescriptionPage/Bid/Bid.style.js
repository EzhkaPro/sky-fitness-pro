import styled from 'styled-components'

export const BidContainer = styled.section`
margin-top: 46px;
  background: #f9ebff;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: "StratosSkyeng";
  @media (max-width: 960px) {
    justify-content: center;
  }
`

export const SignUp = styled.div`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  margin-top: 46px;
  margin-left: 52px;
  max-width: 800px;
  font-family: "StratosSkyeng";
  padding-bottom: 48px;
  @media (max-width: 1161px) {
    max-width: 60%;
  }
  @media (max-width: 960px) {
    margin: 10px 0;
    max-width: 80%;
  }
  @media (max-width: 426px) {
    font-size: 25px;
  }
`

export const BidImg = styled.img`
font-family: "StratosSkyeng";
  @media (max-width: 426px) {
    max-width: 80%;
  }
`

export const StyledSuccess = styled.div`
  color: green;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
  font-family: "StratosSkyeng";
`