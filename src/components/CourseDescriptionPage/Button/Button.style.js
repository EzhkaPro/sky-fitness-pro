import styled from 'styled-components'

export const Button = styled.button`
  background: #580ea2;
  border-radius: 46px;
  padding: 12px 24px 16px;

  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05000000074505806px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  font-family: "StratosSkyeng";
  transition: all 0.6s;
  &:hover {
    background: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
  &:disabled {
    background-color: #d9d9d9;
    cursor: not-allowed;
  }
`