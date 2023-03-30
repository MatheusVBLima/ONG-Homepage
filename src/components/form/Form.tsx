import React from "react";
import styles from "./Form.module.scss";

export default function Form() {
  return (
    <div className={styles.wrapper}>
      <h2>Preencha o formulário e nos ajude!</h2>
      <form action='https://formsubmit.co/your@email.com' method='POST'>
        <input type='text' name='name' placeholder='Nome' required />
        <input
          type='email'
          name='email'
          placeholder='Email para contato'
          required
        />
        <input
          type='number'
          name='email'
          placeholder='Quantidade de livros'
          required
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
