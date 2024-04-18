import { useState } from 'react'
import * as S from './PersonalDataStyle'
import { useLocation, useNavigate } from 'react-router-dom'

export const PersonalData = ({ email, logOut }) => {
  const [selectedOption, setSelectedOption] = useState('value1')
  const location = useLocation()
  const navigate = useNavigate()

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value
    setSelectedOption(selectedValue)
    if (selectedValue === 'value2') {
      navigate(`/profile`)
    } else if (selectedValue === 'value3') {
      logOut()
    }
  }
  return (
    <S.HeaderProfile>
      <S.HeaderSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-tect-logo"></use>
      </S.HeaderSvg>
      <S.HeaderSelect
        name="select"
        value={selectedOption}
        onChange={handleSelectChange}
        style={{
          backgroundColor: location.pathname === '/' ? '#271a58' : 'inherit',
          color: location.pathname === '/' ? '#fff' : '#000',
        }}
      >
        <S.HeaderSelectOption value="value1">{email}</S.HeaderSelectOption>
        <S.HeaderSelectOption value="value2">Профиль</S.HeaderSelectOption>
        <S.HeaderSelectOption value="value3">Выйти</S.HeaderSelectOption>
      </S.HeaderSelect>
    </S.HeaderProfile>
  )
}
