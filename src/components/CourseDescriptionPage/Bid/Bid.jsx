import React from 'react'
import * as S from './Bid.style'
// import svgUrl from '../../../assets/images/bid.svg'
import Button from '../Button/Button'

const Bid = ({addCourse}) => {
  return (
    <S.BidContainer>
      <S.SignUp>
        <p>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <div style={{ marginTop: '34px' }}>
          <Button onClick={addCourse}>Записаться на тренировку</Button>
        </div>
      </S.SignUp>
      <S.BidImg alt="Рука с телефоном" src='/img//phone.svg'></S.BidImg>
    </S.BidContainer>
  )
}

export default Bid
