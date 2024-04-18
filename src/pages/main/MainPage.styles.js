import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`

export const Container = styled.div`
  position: relative;
  overflow: visible;
  background-color: #271a58;
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 41px;
  padding-bottom: 60px;
  font-family: "StratosSkyeng";
`

export const FooterButton = styled.div`
  background-color: #c7e957;
  width: 147px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 46px;
  border: none;
  font-size: 24px;
  color: rgb(0, 0, 0);
  font-family: StratosSkyeng;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "StratosSkyeng";

  &:hover {
    background-color: #daf289;
  }

  &:active {
    background-color: #ebffab;
  }
`

export const PageUp = styled.a`
  text-decoration: none;
`
export const HeaderInfo = styled.div`
display: flex;
justify-content: space-between;
padding-top: 35px;
`
export const Titles = styled.div `
`
export const HeaderDescription = styled.div`
    font-size: 20px;
    color: #FFFFFF;
    -webkit-text-stroke: 0.5px black;
    letter-spacing: 0.05px;
    font-family: "StratosSkyeng";
`

export const HeaderTitle = styled.div `
    color: white;
    font-size: 60px;
    width: 830px;
    height: 135px;
    padding-top: 17px;
    font-family: "StratosSkyeng";
`
export const ChangeBody = styled.div`
    float: right;
    position: static;
    padding-left: 145px;
    padding-top: 20px;
`