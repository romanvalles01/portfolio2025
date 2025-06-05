"use client";
import React from "react";
import styles from "./contacto.module.css";
import Image from "next/image";
import pfp from "../../statics/pfp.png";
import mailSvg from "../../statics/mailSvg.svg";

export default function Contacto() {
  return (
    <section id="contacto" className={styles.contactoSection}>
      <article className={styles.messageContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.topContactContainer}>
            <div className={styles.superImageContainer}>
              <span className={styles.topBarContainer}>
                <span className={styles.topBar}></span>
                <span className={styles.topBarBack}></span>
              </span>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.pfp}
                  src={pfp}
                  width={1024}
                  height={1536}
                  alt="Roman Valles"
                ></Image>
              </div>
            </div>
            <div className={styles.imageTextContainer}>
              {" "}
              <span className={styles.newMessageContainer}>
                <Image src={mailSvg} height={45} width={45} alt="Mail"></Image>
                <h1 className={styles.newMessage}>NEW MESSAGE</h1>
              </span>
              <h2 className={styles.name}>ROMÁN VALLES</h2>
            </div>
          </div>
          <div className={styles.superResponseContainer}>
            <span className={styles.responseContainerBack}></span>
            <div className={styles.responseContainer}>
              <p className={styles.responseText}>
                ¿Tienes algún proyecto en mente? Estoy abierto a propuestas
                laborales o colaboraciones freelance que combinen desarrollo y
                visión creativa.
              </p>
              <div className={styles.contactButtons}>
                <a
                  href="mailto:romanvalles01@gmail.com"
                  className={styles.cyberButton}
                >
                  Enviar Email
                </a>
                <a
                  href="https://www.linkedin.com/in/romanvalles/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cyberButton}
                >
                  Ir a LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
