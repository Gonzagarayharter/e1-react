import styled from "styled-components";

export const HeroDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin-top: 180px;

    & img {
        width: 800px;
        height: 800px;
    }
`

export const HeroTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    & h1 {
        letter-spacing: 5px;
        font-size: 70px;
        color: #fff;
    }

    & p {
        font-size: 40px;
    }

    & a {
        border: none;
        outline: none;
        color: #fff;
        background-color: #819e4f;
        box-shadow: 15px 15px 2px #000;
        text-align: center;
        padding: 30px;
        font-size: 20px;
        width: 50%;
        cursor: pointer;
    }
`