"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./centralChip.module.css";

export default function CentralChip() {
  const [isHovering, setIsHovering] = useState(false);
  const chipRef = useRef(null);
  const satelliteRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const linesRef = useRef([]);

  // Asegúrate de que el código de LeaderLine se ejecute solo en el cliente
  useEffect(() => {
    if (typeof window === "undefined" || !chipRef.current) return;

    // Importa dinámicamente solo en el cliente
    import("leader-line-new").then((module) => {
      const LeaderLine = module.default;

      linesRef.current = satelliteRefs.map((ref) => {
        if (!ref.current) return null;
        return new LeaderLine(chipRef.current, ref.current, {
          color: "#00f0ff",
          size: 2,
          path: "grid",
          startPlug: "behind",
          endPlug: "behind",
          dash: { animation: true },
        });
      });
    });

    return () => {
      linesRef.current.forEach((line) => line && line.remove());
    };
  }, []);

  useEffect(() => {
    linesRef.current.forEach((line) => {
      if (!line) return;
      line.setOptions({
        color: isHovering ? "#f75049" : "#00f0ff",
        size: isHovering ? 4 : 2,
        dash: { animation: true },
      });
    });
  }, [isHovering]);

  const handleMouseMove = (e) => {
    const chip = chipRef.current;
    const rect = chip.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    chip.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    const chip = chipRef.current;
    chip.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    setIsHovering(false);
  };

  return (
    <div className={styles.wrapper}>
      {/* Satélites arriba */}

      <div className={styles.satellitesTop}>
        <div
          ref={satelliteRefs[9]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          FIGMA
        </div>
        <div
          ref={satelliteRefs[5]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          HTML
        </div>
        <div
          ref={satelliteRefs[6]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          CSS
        </div>
      </div>

      {/* Satélites laterales */}
      <div className={styles.satellitesLeft}>
        <div
          ref={satelliteRefs[0]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          React
        </div>
        <div
          ref={satelliteRefs[1]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          Next.js
        </div>
      </div>

      {/* Chip central */}
      <span
        className={styles.centralChip}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={chipRef}
      >
        <div className={styles.centralChipText}>
          <p className={styles.centralChipText1}>CHARACTER LEVEL</p>
          <h1>24</h1>
        </div>
      </span>

      {/* Satélites laterales derechos */}
      <div className={styles.satellitesRight}>
        <div
          ref={satelliteRefs[2]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          Firebase
        </div>
        <div
          ref={satelliteRefs[3]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          Tailwind
        </div>
        <div
          ref={satelliteRefs[4]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          Astro
        </div>
      </div>

      {/* Satélites abajo */}
      <div className={styles.satellitesBottom}>
        <div
          ref={satelliteRefs[10]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          NodeJs
        </div>
        <div
          ref={satelliteRefs[7]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          Git
        </div>
        <div
          ref={satelliteRefs[8]}
          className={`${styles.satellite} ${
            isHovering ? styles.satelliteHover : ""
          }`}
        >
          Vercel
        </div>
      </div>
    </div>
  );
}
