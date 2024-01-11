import React from "react";
import { TextArea, ErrorStyled } from "./TextAreaInputStyles";
import { InputBoxStyled } from "./InputStyles";

const TextAreaInput = ({ name, isError, ...field  }) => {
  return (
    <InputBoxStyled>
      <TextArea 
       error={isError}
       name={name}
       {...field}
      />
      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default TextAreaInput;
