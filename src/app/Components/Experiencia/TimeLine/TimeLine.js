"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./timeLine.module.css";
import Image from "next/image";
import LucyBack from "../../../statics/backLucy.png";

export default function TimeLine() {
  const timelineRefs = useRef([]);
  const lucyRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineItems = [
    {
      year: "2022",
      title: "Diseño Ux/Ui - CodoACodo",
      description:
        "Diseñé mi primer proyecto aplicando los fundamentos de Ux Ui.",
      details:
        "Exploré conceptos como heurísticas de usabilidad, diseño centrado en el usuario y prototipado rápido. Usé Figma para diseñar una app ficticia, desde wireframes hasta diseño visual completo.",
    },
    {
      year: "2023",
      title: "SummerHack > CodeaRock",
      description: "Desarrollé mi primer proyecto freelance real.",
      details:
        "Participé en un hackathon de verano organizado por CodeaRock, donde desarrollé junto a un equipo un sitio web funcional para una banda de música independiente. Me encargué del FrontEnd completo en React, logrando una entrega profesional en tiempo récord.",
    },
    {
      year: "2023",
      title: "Inicio Tecnicatura",
      description: "Comencé la Tecnicatura en Desarrollo de Software.",
      details:
        "Adquirí bases sólidas en programación con lenguajes como JavaScript, Java, .NET y Python. Profundicé en estructuras de datos, algoritmos, arquitectura de software y bases de datos relacionales y no relacionales.",
    },
    {
      year: "2024",
      title: "A3 Sports",
      description:
        "Sistema para análisis de partidos de fútbol. Implementación de YT Api, manejo de archivos locales y FrontEnd.",
      details:
        "Diseñé y desarrollé una herramienta web para analizar jugadas y partidos deportivos. Incluye integración con la YouTube API, control de archivos de video y una interfaz dinámica para equipos técnicos.",
    },
    {
      year: "2025",
      title: "FOMO",
      description: "E-commerce para venta y delivery de bebidas.",
      details:
        "Proyecto personal de e-commerce con Next.js, enfocado en la venta y entrega de bebidas. Implementé la pasarela de pagos de Mercado Pago para transacciones seguras y Twilio para automatizar mensajes de confirmación vía WhatsApp/SMS. El sitio incluye gestión de productos, lógica de delivery y diseño UI/UX con enfoque mobile-first.",
    },
  ];

  const linesRef = useRef([]);

  useEffect(() => {
    let animationFrame;
    let isMounted = true;

    async function drawLines() {
      if (!lucyRef.current) return;

      const LeaderLine = (await import("leader-line-new")).default;
      const lines = [];

      timelineRefs.current.forEach((item) => {
        if (item && lucyRef.current) {
          const line = new LeaderLine(item, lucyRef.current, {
            color: "#56f7ff",
            size: 2,
            path: "grid",
            startPlug: "behind",
            endPlug: "behind",
            animOptions: { duration: 1000, timing: "ease" },
            dash: { animation: true },
          });
          lines.push(line);
        }
      });

      linesRef.current = lines;

      const updateLines = () => {
        if (!isMounted) return;
        linesRef.current.forEach((line) => line?.position());
        animationFrame = requestAnimationFrame(updateLines);
      };

      updateLines();
    }

    drawLines();

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrame);
      linesRef.current.forEach((line) => line?.remove());
    };
  }, []);

  useEffect(() => {
    if (!linesRef.current.length) return;

    linesRef.current.forEach((line, index) => {
      line.setOptions({
        color: hoveredIndex === index ? "#f75049" : "#56f7ff",
      });
    });
  }, [hoveredIndex]);

  return (
    <section className={styles.timelineSection}>
      <div className={styles.timelineWrapper}>
        <div className={styles.timeline}>
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={styles.timelineItem}
              ref={(el) => {
                if (el) timelineRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.timelineContentContainer}>
                <span className={styles.timelineContentBack}></span>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>
                    {item.year} - {item.title}
                  </h3>
                  <p>{item.description}</p>
                  <div className={styles.timelineDetails}>
                    <p>{item.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.lucyContainer}>
          <span className={styles.lucyBack}></span>
          <span className={styles.lucyBack2}></span>
          <Image
            className={styles.lucy}
            ref={lucyRef}
            src={LucyBack}
            width={228}
            height={501}
            alt="Lucy"
          />
        </div>
      </div>
    </section>
  );
}
