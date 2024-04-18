import styled from 'styled-components'

export const CourseNameContainer = styled.section`
  border-radius: 30px;
  height: 310px;
  margin-top: 40px;
  font-size: 64px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: -0.800000011920929px;
  text-align: left;
  position: relative;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  background-color: #F5F5F5;
  font-family: "StratosSkyeng";
}
  @media (max-width: 426px) {
    font-size: 40px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`

export const CourseNameImage = styled.img`
  display: block;
  width: auto;
  max-height: 300px;
  object-fit: contain;
}
`

export const CourseName = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  font-family: "StratosSkyeng";
  @media (max-width: 400px) {
    top: 10px;
  }
`
