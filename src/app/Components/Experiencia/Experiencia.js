"use client";
import React from "react";
import styles from "./experiencia.module.css";
import Image from "next/image";
import exp1 from "../../statics/exp1.png";
import exp2 from "../../statics/exp2.png";
import exp3 from "../../statics/exp3.png";
import TimeLine from "./TimeLine/TimeLine";

export default function Experiencia() {
  return (
    <section className={styles.experienciaSection}>
      <div className={styles.backExperiencia}>
        <span className={styles.experiencia}>Experiencia</span>
      </div>
      <article className={styles.cardsContainer}>
        <div className={styles.CardContainer}>
          <h1 className={styles.cardName}>STREET KID</h1>
          <span className={styles.imgContainer}>
            <span className={styles.leftBarImg}></span>
            <Image
              className={`${styles.imgCard} ${styles.imgCardGray}`}
              src={exp1}
              width={300}
              height={445}
              alt="Nomad"
            ></Image>
          </span>
        </div>
        <div className={styles.CardContainer}>
          <h1 className={styles.cardName}>NOMAD</h1>
          <span className={styles.imgContainer}>
            <span className={styles.leftBarImg}></span>
            <Image
              className={styles.imgCard}
              src={exp2}
              width={300}
              height={445}
              alt="Nomad"
            ></Image>
          </span>
        </div>
        <div className={styles.CardContainer}>
          <h1 className={styles.cardName}>CORPORATE</h1>
          <span className={styles.imgContainer}>
            <span className={styles.leftBarImg}></span>
            <Image
              className={`${styles.imgCard} ${styles.imgCardGray}`}
              src={exp3}
              width={300}
              height={445}
              alt="Nomad"
            ></Image>
          </span>
        </div>
      </article>
      <TimeLine></TimeLine>
    </section>
  );
}
