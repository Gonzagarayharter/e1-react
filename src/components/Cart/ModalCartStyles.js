import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 450px;
  height: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 480px) {
    width: 250px;
    height: 80%;
  }
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 3px;
  background: black;
  color: white;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 0 1rem;

  & h1 {
    margin-top: 0;
  }
`;

export const MainContainerStyled = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 500px;
  margin: 0 auto;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }

  @media (max-height: 480px) {
    width: 50px;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  border-radius: 5px;
  background: #bfdcd0;
  padding: 1rem;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }

  @media (max-width: 480px) {
    & img {
      display: none;
    }
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  color: black;
  margin-bottom: 2px;
  font-weight: 800;
`;

export const TextStyled = styled.p`
  margin: 0;
  color: red;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  background: #819e4f;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
