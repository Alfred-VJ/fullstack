import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dk9tikv",
        "template_yuiqo53",
        form.current,
        "-NyJxsqAhylygsdY6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <br />
      <label>Apellido</label>
      <input type="text" name="user_last" />
      <br />
      <label>Escuela</label>
      <input type="text" name="user_escool" />
      <br />
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="submit" value="Send" />
    </form>
  );
};
