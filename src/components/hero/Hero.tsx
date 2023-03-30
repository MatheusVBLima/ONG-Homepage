import React from "react";
import avatar from "../../assets/heroAvatar.png";
import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <span>👏 Olá, Pessoa!</span>
        <h1>
          Lorem ipsum dolor sit. <br /> <span>Lorem, ipsum.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          nulla? <br />
        </p>
      </div>
      <Image src={avatar} alt='avatar' width={450} height={521} />
    </div>
  );
}
