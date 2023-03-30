import styles from "./Header.module.scss";
import logo from "../../assets/ignite-logo.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);

  function handleIsHomeActive() {
    setIsHomeActive(true);
    setIsAboutActive(false);
    setIsFormActive(false);
  }

  function handleIsAboutActive() {
    setIsHomeActive(false);
    setIsAboutActive(true);
    setIsFormActive(false);
  }

  function handleIsFormActive() {
    setIsHomeActive(false);
    setIsAboutActive(false);
    setIsFormActive(true);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span>LOGO ONG</span>
        <nav>
          <a
            href='#home'
            className={isHomeActive ? styles.active : ""}
            onClick={handleIsHomeActive}
          >
            Home
          </a>
          <a
            href='#quem-somos'
            className={isAboutActive ? styles.active : ""}
            onClick={handleIsAboutActive}
          >
            Quem Somos
          </a>
        </nav>
        <a
          href='#form'
          className={
            isFormActive ? `${styles.active} ${styles.cta}` : styles.cta
          }
          onClick={handleIsFormActive}
        >
          Faça Parte
        </a>
      </div>
    </header>
  );
}
