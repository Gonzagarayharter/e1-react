import React from "react";
import Footer from "../../components/Footer/Footer";
import { ContactContainer, FormContainer } from "./ContactStyled";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <h1>Contacto</h1>
        <FormContainer>
            <input type='text'
            placeholder='Nombre'
            id='nombre'
            name='nombre' />

            <input type='text'
            placeholder='Apellido'
            id='apellido'
            name='apellido' />
            
            <input type='email'
            placeholder='Email'
            id='email'
            name='email' />

            <textarea id="asunto" name="asunto" placeholder="Mensaje" rows={'6'}>
            </textarea>

            <button type='submit'>Enviar</button>
        </FormContainer>
    </ContactContainer>
    <Footer />
    </>
  );
};

export default Contact;
