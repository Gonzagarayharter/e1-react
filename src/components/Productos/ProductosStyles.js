import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    box-shadow: 0 15px 25px rgba(0,0,0,.6);

    & h1 {
        font-size: 50px;
        letter-spacing: 5px;
        text-align: center;
    }

    @media (max-width: 600px) {
    width: 90%;
        & h1 {
            font-size: 40px;
        }
    }

    @media (max-width: 480px) {
        & h1 {
            font-size: 40px;
        }
    }

    @media (max-width: 350px) {
        & h1 {
            font-size: 30px;
        }
    }
`

export const ProductoDivContainer = styled.div`
    display: flex;
    gap: 20px;

    
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
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
    text-align: center;

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

    @media (max-width: 1650px) {
    width: 50%;

    & h2 {
        font-size: 20px;
    }
  }

  @media (max-width: 1400px) {
    & h2 {
        font-size: 25px;
    }

    & img {
        width: 100%;
    }
  }

  @media (max-width: 950px) {
    width: 100%;

    & img {
        width: 60%;
    }
  }

  @media (max-width: 600px) {
    & img {
        width: 80%;
    }
  }
`

export const BotonATienda = styled(motion(NavLink))`
        border: none;
        outline: none;
        color: #fff;
        background-color: #819e4f;
        text-align: center;
        padding: 10px;
        width: 80%;
`