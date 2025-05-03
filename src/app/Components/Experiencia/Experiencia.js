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
    <section id="experiencia" className={styles.experienciaSection}>
      <div className={styles.backExperiencia}>
        <span className={styles.experiencia}>Experiencia</span>
      </div>

      <TimeLine></TimeLine>
    </section>
  );
}
