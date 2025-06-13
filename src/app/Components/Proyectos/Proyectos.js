"use client";
import React from "react";
import styles from "./proyectos.module.css";
import ProyectCard from "./ProyectCard/ProyectCard";
import p1 from "../../statics/p1.png";
import p2 from "../../statics/p2.svg";
import p3 from "../../statics/p3.svg";
import p4 from "../../statics/p4.png";
import p5 from "../../statics/p5.png";
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
import socketio from "../../statics/Icons/socketio.png";
import express from "../../statics/Icons/express.png";

export default function Proyectos() {
  const [activeIndex, setActiveIndex] = useState(1);
  const CARD_WIDTH = 300;
  const GAP = 40;
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
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
      link: "https://fomobebidas.com",
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
      link: "https://tesla-ochre-nu.vercel.app/",
      linkGithub: "https://github.com/romanvalles01/driftcars",
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
      link: "https://i-movie-eight.vercel.app/",
      linkGithub: "https://github.com/romanvalles01/iMovie",
    },
    {
      title: "VulnScanner",
      technologies: [
        { name: "Node.js", logo: nodejs },
        { name: "Express", logo: express },
        { name: "Tailwind", logo: tailwind },
      ],
      image: p5,
      description:
        "Scanner básico para analizar puertos y headers HTTP inseguros.",
      linkGithub: "https://github.com/romanvalles01/vuln-scanner",
    },
    {
      title: "Traffic Dashboard",
      technologies: [
        { name: "Node.js", logo: nodejs },
        { name: "Socket.IO", logo: socketio },
        { name: "Tailwind", logo: tailwind },
      ],
      image: p4,
      description:
        "Dashboard en tiempo real para visualizar tráfico de red usando tcpdump.",
      linkGithub: "https://github.com/romanvalles01/traffic-dashboard",
    },
  ];

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setInView(true), 500);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextSlide(); // swipe izquierda
    } else if (distance < -50) {
      prevSlide(); // swipe derecha
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className={styles.sectionProyectos}
    >
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

      <div
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
              <ProyectCard
                {...project}
                isActive={index === activeIndex && inView}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
