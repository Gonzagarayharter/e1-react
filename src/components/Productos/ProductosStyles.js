import styled from "styled-components";

export const ProductosDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1300px;
    gap: 20px;
    background-color: #fff;
    padding: 30px;
    border-radius: 30px;
    width: 60%;
    margin-top: 30px;

    & h1 {
        font-size: 50px;
        letter-spacing: 5px;
    }
`

export const ProductoDivContainer = styled.div`
    display: flex;
    gap: 20px;
`
export const ProductoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 400px;
    width: 300px;
    background-color: #bfdcd0;
    border-radius: 10px;

    & img {
        height: 200px;
        width: 250px;
    }

    & h2 {
        font-size: 25px;
    }

    & a {
        border: none;
        outline: none;
        color: #fff;
        background-color: #819e4f;
        text-align: center;
        padding: 10px;
        width: 80%;
        cursor: pointer;
    }
`