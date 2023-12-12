import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #bfdcd0;
  color: #000;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #819e4f;
  }
`;