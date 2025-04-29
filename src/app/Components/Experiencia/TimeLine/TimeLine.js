"use client";

import React, { useEffect, useRef } from "react";
import styles from "./timeLine.module.css";
import Image from "next/image";
import LucyBack from "../../../statics/backLucy.png";

export default function TimeLine() {
  const timelineRefs = useRef([]);
  const lucyRef = useRef(null);

  const timelineItems = [
    {
      year: "2022",
      title: "Diseño Ux/Ui - CodoACodo",
      description:
        "Diseñé mi primer proyecto aplicando los fundamentos de Ux Ui.",
    },
    {
      year: "2023",
      title: "SummerHack > CodeaRock",
      description: "Desarrollé mi primer proyecto freelance real.",
    },
    {
      year: "2023",
      title: "Inicio Tecnicatura",
      description: "Comencé la Tecnicatura en Desarrollo de Software.",
    },
    {
      year: "2024",
      title: "A3 Sports",
      description:
        "Sistema para análisis de partidos de fútbol. Implementación de YT Api, manejo de archivos locales y FrontEnd.",
    },
    {
      year: "2025",
      title: "FOMO",
      description: "E-commerce para venta y delivery de bebidas.",
    },
  ];

  useEffect(() => {
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
          });
          lines.push(line);
        }
      });

      return () => lines.forEach((line) => line.remove());
    }

    drawLines();

    return () => {
      isMounted = false;
    };
  }, []);

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
            >
              <div className={styles.timelineContentContainer}>
                <span className={styles.timelineContentBack}></span>
                <div className={styles.timelineContent}>
                  <h3>
                    {item.year} - {item.title}
                  </h3>
                  <p>{item.description}</p>
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
