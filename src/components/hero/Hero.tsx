import React from "react";
import avatar from "../../assets/heroAvatar.png";
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <span>👏 Olá, Pessoal!</span>
        <h1>
          Bem-vindos à página da ONG <br /> <span>Leitura Solidária</span>
        </h1>
        <p>
          Uma organização sem fins lucrativos que tem como missão promover o
          acesso à leitura e à educação para todos. <br />
        </p>
      </div>
      <Image src={avatar} alt='avatar' width={450} height={521} />
    </div>
  );
}
