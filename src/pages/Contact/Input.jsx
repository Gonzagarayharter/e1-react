import React from "react";
import {
    InputBoxStyled,
    InputStyled,
    ErrorStyled,
  } from "./InputStyles";

const Input = ({ name, type, isError, ...field }) => {
  return (
    <InputBoxStyled>
      <InputStyled
      error={isError}
      name={name}
      type={type}
      {...field}
      />

      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default Input;
