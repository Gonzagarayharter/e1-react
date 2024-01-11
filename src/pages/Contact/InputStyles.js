import styled from "styled-components";

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const InputStyled = styled.input`
  border-color: ${({ error }) => (error ? "red" : "#fff")};
  padding: 10px;
    width: 60%;
    border: none;
    outline: none;
    background: #bfdcd0;
    color: #000;
    border-radius: 10px;
    font-size: 18px;

    &:focus {
        background-color: #819e4f;
        transition: .5s;
    }
`;

export const ErrorStyled = styled.span`
display: flex;
align-items: start;
    justify-content: flex-start;
    padding-top: 5px;
  color: red;
`;
