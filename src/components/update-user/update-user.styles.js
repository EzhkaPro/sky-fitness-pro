import { styled } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Maincard = styled.div`
  --modal-width: 366px;
  --modal-height: 439px;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
`

export const PageClose = styled.div`
  position: absolute;
  z-index: 999;
  top: 0px;
  right: 0px;
  padding: 10px;
  cursor: pointer;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`
export const InputTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  text-align: left;
  color: #000000;
  margin-top: 38px;
`

export const InputLogo = styled.input`
border: none;
  border-bottom: 1px solid #d0cece;
  background-color: transparent;
  color: inherit;
  outline: none;
  width: 279 px;
  height: 40 px;
  padding-top: 46px;
  padding-left: 3px;
  padding-bottom: 8px;
}

:placeholder {
  color: #d0cece;
}
`
export const LoginButton = styled.button`
  background-color: #580ea2;
  color: white;
  font-size: 18px;
  box-sizing: border-box;
  border: none;
  height: 52px;
  min-width: 278px;
  border-radius: 46px;
  cursor: pointer;
`
export const Error = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
`
export const Buttons = styled.div`
  padding-top: 60px;

  :hover {
    background-color: #3f007d;
  }

  :active {
    background-color: #271a58;
  }
`
