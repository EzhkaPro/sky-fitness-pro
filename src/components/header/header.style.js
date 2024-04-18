import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`

export const Header = styled.div`
padding-top: 30px;
`

export const HeaderMain = styled.div `
    display: flex;
justify-content: space-between;
`
export const Logo = styled.div`
width: 220px;
    height: 35px;
    cursor:pointer;
`

export const HeaderButton = styled.div `
    color: white;
    background-color: #140D40;
    width: 77px;
    height: 36px;
    box-sizing: border-box;
    border: none;
    border-radius: 46px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "StratosSkyeng";

&:hover{
    background-color: #2D1F79;
}

&:active{
    background-color: #3B29A2;
}
`

export const HeaderTopButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`