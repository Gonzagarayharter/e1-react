import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    background-color: #fff;
    border-radius: 30px;
    padding: 30px;
    gap: 20px;    
    margin-top: 230px;
    margin-bottom: 100px;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);

    & h1 {
        font-size: 50px;
        letter-spacing: 5px;
    }

    @media (max-width: 750px) {
        width: 80%;
    }

    @media (max-width: 350px) {
        & h1 {
            font-size: 40px;
        }
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;

    & input,
    & textarea {
    padding: 10px;
    width: 60%;
    border: none;
    outline: none;
    background: #bfdcd0;
    color: #000;
    border-radius: 10px;
    font-size: 18px;
    }

    & input::placeholder,
    & textarea::placeholder {
        color: #000;
    }

    & input:focus,
    & textarea:focus {
        background-color: #819e4f;
        transition: .5s;
    }

    & button {
        background-color: #819e4f;
        color: #fff;
        border: none;
        border-radius: 10px;
        padding: 15px 25px;
        cursor: pointer;
        width: 30%;
        font-size: 18px;
    }

    @media (max-width: 750px) {
        width: 100vw;
    }
`