import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  user-select: none;
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 150px;
  padding: 1rem 0.5rem;

  background-color: ${({ selected }) =>
    selected ? '#819e4f' : '#bfdcd0'};
  border-radius: 5px;
  cursor: pointer;

  h2 {
    font-size: 1rem;
  }
`;
