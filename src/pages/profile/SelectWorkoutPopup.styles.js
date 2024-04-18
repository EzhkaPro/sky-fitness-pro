import styled from "styled-components";

export const PoupLayout = styled.div `
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); /* Прозрачный чёрный цвет для затемнения */
z-index: 8; /* Выше остальных элементов */
`

export const SelectWorkoutContainer = styled.div `
z-index: 9;
background: rgb(255, 255, 255);
width: 444px;
height: 626px;
display: flex;
flex-direction: column;
gap: 40px;
padding: 32px 40px 50px 40px;
align-items: center;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: rgb(245, 245, 245);
box-shadow: 0.4em -0.4em 40px #CDCDCD;
border-radius: 15px;
`
export const SelectWorkoutHeader = styled.div `
pointer-events: none;
`
export const SelectWorkoutTitle = styled.div `
color: rgb(0, 0, 0);
font-family: StratosSkyeng;
font-size: 38px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0%;
text-align: left;
`
export const SelectWorkoutBody = styled.div `
overflow-y: scroll;
padding: 10px 15px;
&::-webkit-scrollbar {
    width: 10px;
}
&::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;    
}
&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.05);
}
`
export const SelectWorkoutList = styled.div `
display: flex;
flex-direction: column;
gap: 12px;
`
export const SelectWorkoutItem = styled.div `
border-radius: 26px;
font-family: StratosSkyeng;
letter-spacing: -0.05px;
text-align: center;
display: flex;
gap: 5px;
flex-direction: column;
cursor: pointer;

// непройденные дни
box-sizing: border-box;
border: 1px solid rgb(0, 0, 0);
border-radius: 26px;
color: rgb(0, 0, 0);
width: 278px;
font-size: 20px;
font-weight: 400;
line-height: 115%;
padding: 10px;
cursor: pointer;


box-sizing: border-box;
// пройденные дни
// border: 1px solid rgb(6, 177, 110);
// border-radius: 26px;
// color: rgb(6, 177, 110);

&:hover {
transform: scale(1.1);
border-width: 2px; 
}
`
export const SelectWorkoutItemNameContainer = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 5px;
margin-bottom: 5px;
`
export const SelectWorkoutItemName = styled.div `
color: rgb(0, 0, 0);
font-family: StratosSkyeng;
font-size: 20px;
font-weight: 400;
line-height: 115%;
letter-spacing: -0.05px;
text-align: center;
`
export const SelectWorkoutItemDescr = styled.div `
color: rgb(0, 0, 0);
font-family: StratosSkyeng;
font-size: 16px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0.1%;
text-align: center;
`


export const SelectWorkoutItemComplete = styled.div `
border-radius: 26px;
font-family: StratosSkyeng;
letter-spacing: -0.05px;
text-align: center;
border-radius: 26px;
width: 278px;
font-size: 20px;
font-weight: 400;
line-height: 115%;
padding: 10px;
box-sizing: border-box;
border: 1px solid rgb(6, 177, 110);
color: rgb(6, 177, 110);

&:hover {
transform: scale(1.1);
border-width: 2px; 
}
`
export const SelectWorkoutItemNameComplete = styled.div `
color: rgb(6, 177, 110);
font-family: StratosSkyeng;
font-size: 20px;
font-weight: 400;
line-height: 115%;
letter-spacing: -0.05px;
text-align: center;
`
export const SelectWorkoutItemDescrComplete = styled.div `
color: rgb(6, 177, 110);
font-family: StratosSkyeng;
font-size: 16px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0.1%;
text-align: center;
`

 export const WorkoutCheckComplete = styled.img `
width: 24px;
height: 24px;
color: rgb(6, 177, 110);
 `