import styles from "./Header.module.scss";
import logo from "../../assets/ignite-logo.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isActive, setIsActive] = useState(true);

  function handleIsActive(newIsActive: boolean) {
    setIsActive(newIsActive);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span>LOGO ONG</span>
        <nav>
          <a
            href='#home'
            className={isActive ? styles.active : ""}
            onClick={() => handleIsActive(true)}
          >
            Home
          </a>
          <a
            href='#quem-somos'
            className={!isActive ? styles.active : ""}
            onClick={() => handleIsActive(false)}
          >
            Quem Somos
          </a>
        </nav>
        <a href='#form' className={styles.cta}>
          Faça Parte
        </a>
      </div>
    </header>
  );
}
