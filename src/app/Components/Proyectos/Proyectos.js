"use client";
import React from "react";
import styles from "./proyectos.module.css";
import ProyectCard from "./ProyectCard/ProyectCard";
import p1 from "../../statics/p1.png";
import p2 from "../../statics/p2.svg";
import p3 from "../../statics/p3.svg";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
// Import images
import astro from "../../statics/Icons/astro.svg";
import tailwind from "../../statics/Icons/tailwind.svg";
import vercel from "../../statics/Icons/vercel.svg";
import nextjs from "../../statics/Icons/nextjs.svg";
import firebase from "../../statics/Icons/firebase.svg";
import nodejs from "../../statics/Icons/nodejs.svg";
import github from "../../statics/Icons/github.svg";
import css from "../../statics/Icons/css.svg";
import html from "../../statics/Icons/html.svg";
import prevIcon from "../../statics/prev.svg";
import nextIcon from "../../statics/next.svg";

export default function Proyectos() {
  const [activeIndex, setActiveIndex] = useState(1);
  const CARD_WIDTH = 300;
  const GAP = 40;

  const projects = [
    {
      title: "FOMO",
      technologies: [
        { name: "NextJs", logo: nextjs },
        { name: "Firebase", logo: firebase },
        { name: "NodeJs", logo: nodejs },
        { name: "Css", logo: css },
        { name: "Html", logo: html },
      ],
      image: p2,
      description: "E-commerce para venta y delivery de bebidas.",
    },
    {
      title: "DRIFT CARS",
      technologies: [
        { name: "Astro", logo: astro },
        { name: "Tailwind", logo: tailwind },
        { name: "Vercel", logo: vercel },
      ],
      image: p1,
      description: "Landing Page inspirada en Tesla.",
    },
    {
      title: "iMOVIE",
      technologies: [
        { name: "NextJs", logo: nextjs },
        { name: "Firebase", logo: firebase },
      ],
      image: p3,
      description:
        "App para guardar tus películas favoritas, con autenticación y base de datos.",
    },
  ];

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.sectionProyectos}>
      <span className={styles.btnContainer}>
        <div className={styles.wrapperBtn}>
          <span className={styles.btnBackNext}></span>
          <button className={styles.btnNext} onClick={prevSlide}>
            <Image src={prevIcon} height={20} width={20} alt="Anterior" />
          </button>
        </div>
        <div className={styles.wrapperBtn}>
          <span className={styles.btnBackPrev}></span>
          <button className={styles.btnPrev} onClick={nextSlide}>
            <Image src={nextIcon} height={20} width={20} alt="Siguiente" />
          </button>
        </div>
      </span>

      <div className={styles.carousel}>
        {projects.map((project, index) => {
          const offset = index - activeIndex;
          const translate = offset * (CARD_WIDTH + GAP);
          const scale = index === activeIndex ? 1 : 0.8;
          const rotate = offset * -20;

          return (
            <div
              key={index}
              className={styles.cardWrapper}
              style={{
                transform: `translateX(${translate}px) scale(${scale}) rotateY(${rotate}deg)`,
                opacity: index === activeIndex ? 1 : 0.5,
                zIndex: index === activeIndex ? 10 : 1,
              }}
            >
              <ProyectCard {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
