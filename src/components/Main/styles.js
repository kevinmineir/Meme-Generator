import styled from 'styled-components';

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    margin-left:2rem;
    margin-right:2rem;
    margin-top:1.5rem;
`
export const Inputs = styled.div`
    display:flex;
    justify-content: center;
    padding-bottom: 1.5rem;
`
export const Text = styled.span`
    font-size: 1.1rem;
`
export const Input = styled.input`
    width: 40vw;
    max-width:18rem;
    margin-top: 0.5rem;
    height: 1.8rem;
    border-radius: 10px;
    border: 1px solid gray;
`
export const Div = styled.div`
    display:flex;
    justify-content: center;
`
export const Button = styled.button`
    padding: 0.5rem 1rem 0.5rem 1rem;
    width:80vw;
    max-width: 27rem;
    color:white;
    border:none;
    border-radius: 50px;
    background: linear-gradient(to right, rgb(85, 4, 85),rgba(122, 19, 122, 0.86),rgba(122, 19, 122, 0.86));
    
    &:hover{
        cursor: pointer;
        background: linear-gradient(to right, rgb(85, 4, 85),rgba(122, 19, 122, 0.86),rgba(122, 19, 122, 0.86));
        filter: brightness(1.1);
    }
`


export const ContainerImg = styled.div`
     background-image: url('https://pbs.twimg.com/profile_images/1919821909673320449/8ENFUF8t_400x400.jpg');
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