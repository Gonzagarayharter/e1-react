import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../../components/Footer/Footer";
import { ContactContainer, FormContainer } from "./ContactStyled";
import Input from "./Input";
import TextAreaInput from "./TextAreaInput";
import SubmitContact from "./SubmitContact";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo requerido"),
  surname: Yup.string().trim().required("Campo requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Campo requerido"),
  comments: Yup.string().max(255, "Máximo de 255 caracteres").notRequired(),
});

const Contact = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      comments: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log({ values });
      const success = true;

      if (success) {
        setIsSubmitSuccessful(true);
        resetForm();
      }
    },
  });

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  return (
    <>
      <ContactContainer>
        <h1>Contacto</h1>
        {isSubmitSuccessful ? (
          <p>Mensaje enviado correctamente. ¡Gracias!</p>
        ) : (
        <FormContainer>
          <Input
            name="name"
            type="text"
            placeholder="Nombre"
            isError={touched.name && errors.name}
            {...getFieldProps("name")}
          ></Input>

          <Input
            name="surname"
            type="text"
            placeholder="Apellido"
            isError={touched.surname && errors.surname}
            {...getFieldProps("surname")}
          ></Input>

          <Input
            name="email"
            type="email"
            isError={touched.email && errors.email}
            placeholder="Email"
            {...getFieldProps("email")}
          ></Input>

          <TextAreaInput
            name="comments"
            isError={touched.comments && errors.comments}
            {...getFieldProps("comments")}
            placeholder="Mensaje"
            rows={"6"}
          />
          <SubmitContact onSubmit={handleSubmit} />
        </FormContainer>
        )}
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;
