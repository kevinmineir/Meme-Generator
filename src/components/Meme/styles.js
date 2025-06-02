import  styled from "styled-components";

export const ContainerImg = styled.div`
     background-image: url(${props => props.MemeImg});
     background-repeat: no-repeat;
     background-size: fill;
     background-position: center;
     justify-self: center;
     display: flex;
     width: 80vw;
     height: 80vh;
     max-height: 22rem;
     max-width: 27rem;
     margin-top: 1rem;
     justify-content: space-between;
     flex-direction: column;
`
export const TopText = styled.span`
    font-size: 2rem;
    color: white;
    margin-left: 1.2rem;
    margin-top: 0.5rem;
    -webkit-text-stroke: 1px black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const BottomText = styled.span`
    font-size: 2rem;
    color: white;
    align-self: flex-end;
    margin-right: 1.2rem;
    -webkit-text-stroke: 1px black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`