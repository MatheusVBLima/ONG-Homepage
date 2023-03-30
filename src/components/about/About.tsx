import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <h2>Quem Somos</h2>
      <p>
        Acreditamos que o conhecimento pode mudar o mundo e estamos empenhados
        em fazer a nossa parte para tornar isso uma realidade.
        <br /> Desde a nossa fundação, já realizamos diversos projetos em
        diferentes comunidades, levando livros, contação de histórias,
        atividades lúdicas e outras iniciativas para incentivar o interesse pela
        leitura desde cedo. <br />
        Acreditamos que isso é essencial para o desenvolvimento pessoal e para a
        formação de cidadãos mais conscientes e engajados.
      </p>
    </div>
  );
}
