import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  :focus {
    background-color: #819e4f;
  }

  @media (max-width: 800px) {
      width: 70%;
      gap: 15px;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 150px;
  padding: 1rem 0.5rem;
  background-color: #bfdcd0;
  border-radius: 5px;
  cursor: pointer;

  h2 {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
      width: 100%;
    }

    @media (max-width: 400px) {
      width: 100%;
    }
`;
