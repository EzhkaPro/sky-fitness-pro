import {
  styled
} from "styled-components";

export const ContainerProfile = styled.div ``;

export const Header = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const HeaderLogo = styled.div ``;
export const Img = styled.img ``;
export const HeaderProfile = styled.div `
  display: flex;
  column-gap: 9px;
`;
export const HeaderSvg = styled.svg `
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;
export const HeaderSelect = styled.select `
background-color: #0563af;
color: white;
padding: 12px;
border: none;
font-size: 20px;
cursor: pointer;
-webkit-appearance: button;
appearance: button;
outline: none;
  &:before {
    border: none;
    box-shadow: none;
  }
`;

export const HeaderSelectOption = styled.option`
  border: none;
  outline: none;
`;