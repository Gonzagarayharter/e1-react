import React from 'react';
import { ButtonSubmitStyled } from './SubmitContactStyles';

const SubmitContact = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }
  return <ButtonSubmitStyled 
  onClick={(e) => handleSubmit(e)}
  type='submit'
  whileTap={{ scale: 0.95 }}
  >Enviar</ButtonSubmitStyled>;
};

export default SubmitContact;