import Image from "next/image";
import styles from "./habilidades.module.css";
import CentralChip from "./CentralChip/CentralChip";
import bgCircuit from "../../statics/backGroundCircuit.svg";

import React from "react";

export default function Habilidades() {
  return (
    <section className={styles.sectionHabilidades}>
      <span className={styles.bgCircuit}>
        <Image
          className={styles.svgBgCircuit}
          src={bgCircuit}
          width={40}
          height={40}
          alt="Circuito"
        ></Image>
      </span>
      <CentralChip></CentralChip>
    </section>
  );
}
