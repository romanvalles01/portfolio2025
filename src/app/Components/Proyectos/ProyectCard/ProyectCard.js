"use client";
import React from "react";
import styles from "./proyectCard.module.css";
import Image from "next/image";
import ChipImg from "../../ChipImg/ChipImg";

export default function ProyectCard({
  title,
  description,
  image,
  technologies,
}) {
  return (
    <div className={styles.cardContainer}>
      <span className={styles.barContainer}>
        <span className={styles.cardBarLeft}></span>
        <span className={styles.cardBarLeftTop}></span>
        <span className={styles.cardBarLeft2}></span>
      </span>
      <span className={styles.cardBack}>
        <article className={styles.card}>
          <span className={styles.dotCard}></span>
          <Image
            src={image}
            alt="Drift Cars"
            height={1000}
            width={1000}
            className={styles.proyectImg}
          ></Image>
          <div className={styles.proyectTitleContainer}>
            <p className={styles.proyectTitle}>{title}</p>
            <span className={styles.chipContainer}>
              {technologies.map((tech, index) => (
                <ChipImg imgChip={tech} key={index}></ChipImg>
              ))}
            </span>
          </div>
          <div className={styles.proyectInfoContainer}>
            <p className={styles.projectDescription}>{description}</p>
            <div className={styles.githubWrapper}>
              <span className={styles.githubRepoBack}></span>
              <button className={styles.githubRepo}>github</button>
            </div>

            <div className={styles.technologies}></div>
          </div>
        </article>{" "}
      </span>
    </div>
  );
}
