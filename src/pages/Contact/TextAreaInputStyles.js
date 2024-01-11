import styled from "styled-components";

export const TextArea = styled.textarea`
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
    padding-top: 5px;
  color: red;
`;
