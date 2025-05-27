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
    flex-direction:column;
    align-items: center;
`
export const Button = styled.button`
    padding: 0.5rem 1rem 0.5rem 1rem;
    width:80vw;
    max-width: 28rem;
    color:white;
    border:none;
    border-radius: 50px;
    background: linear-gradient(to right, rgb(85, 4, 85),rgba(122, 19, 122, 0.86),rgba(122, 19, 122, 0.86));
`
export const Img = styled.img`
    object-fit: contain;
    width: 80vw;
    max-width: 27rem;
    margin-top: 1rem;
`