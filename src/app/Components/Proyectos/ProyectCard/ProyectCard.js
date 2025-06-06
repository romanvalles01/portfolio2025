"use client";
import React from "react";
import styles from "./proyectCard.module.css";
import Image from "next/image";
import ChipImg from "../../ChipImg/ChipImg";
import { useState, useEffect } from "react";

export default function ProyectCard({
  title,
  description,
  image,
  technologies,
  isActive,
  link,
  linkGithub,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // inicial
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div className={`${styles.cardContainer} ${isActive ? styles.active : ""}`}>
      <span className={styles.barContainer}>
        <span className={styles.cardBarLeft}></span>
        <span className={styles.cardBarLeftTop}></span>
        <span className={styles.cardBarLeft2}></span>
      </span>
      <span className={styles.cardBack}>
        <article className={styles.card}>
          <span className={styles.dotCard}></span>
          <a href={link} target="_blank">
            <Image
              src={image}
              alt={title}
              height={1000}
              width={1000}
              className={styles.proyectImg}
            ></Image>
          </a>
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
              <a href={linkGithub} target="_blank">
                <span className={styles.githubRepoBack}></span>
                <button className={styles.githubRepo}>github</button>
              </a>
            </div>
          </div>
        </article>{" "}
      </span>
    </div>
  );
}
