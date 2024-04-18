import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`

export const Courses = styled.div`
    display: flex;
    gap: 37px;
    flex-wrap: wrap;
`

export const Card = styled.div `
    width: 360px;
    height: 480px;
    box-sizing: border-box;
    border-radius: 30px;
`
export const Card1 = styled.img`
    width: 360px;
    height: 480px;
    box-sizing: border-box;
    border-radius: 30px;
backdrop-filter: blur(29.04px);
background: rgba(205, 205, 205, 0.1);
&:hover { 
    transform: scale(1.05); 
    transition-duration: 0.5s; 
    box-shadow: 1px 1px 30px 15px rgba(39, 26, 200, 0.5); 
    &:active{ 
        transform: scale(1.1); 
    }
`

export const errorText = styled.div`

`