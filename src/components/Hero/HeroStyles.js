import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HeroDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin-top: 180px;

  & img {
    width: 800px;
    height: 800px;
  }

  @media (max-width: 1560px) {
    & img {
      display: none;
    }
  }
`;

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

  @media (max-width: 1560px) {
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    & h1 {
    text-align: center;
    }
  }

  @media (max-width: 800px) {
    & h1 {
      font-size: 40px;
      letter-spacing: none;
    }

    & p {
        font-size: 25px;
    }
  }

  @media (max-width: 500px) {
    & h1 {
      font-size: 30px;
    }

    & p {
        font-size: 18px;
    }
  }

  @media (max-width: 330px) {
    & p {
        font-size: 16px;
    }
  }
`;

export const BotonHomeATienda = styled(motion(NavLink))`
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
`
