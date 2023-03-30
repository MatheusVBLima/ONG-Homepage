import React, { useState } from "react";
import styles from "./Form.module.scss";

export default function Form() {
  const [livros, setLivros] = useState("");

  function handleLivrosChange(event: React.ChangeEvent<HTMLInputElement>) {
    const novoValor = event.target.value;
    if (Number(novoValor) >= 0) {
      setLivros(novoValor);
    }
  }
  return (
    <div className={styles.wrapper}>
      <h2>Preencha o formulário e doe livros!</h2>
      <form action='https://formsubmit.co/your@email.com' method='POST'>
        <input type='text' name='name' placeholder='Nome' required />
        <input
          type='email'
          name='email'
          placeholder='Email para contato'
          required
        />
        <input
          type='text'
          name='livros'
          placeholder='Quantidade de livros'
          pattern='[0-9]*'
          value={livros.toString()}
          onChange={handleLivrosChange}
          required
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
