"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./centralChip.module.css";
import { Parallax } from "react-scroll-parallax";

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

    const isMobile = window.innerWidth <= 768;
    if (isMobile) return; // ⛔ No renderiza líneas en mobile

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
      linesRef.current.forEach((line) => line?.remove());
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
        <Parallax translateY={[-20, 10]}>
          <div
            ref={satelliteRefs[9]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            FIGMA
          </div>
        </Parallax>
        <Parallax translateY={[-15, 15]}>
          <div
            ref={satelliteRefs[5]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            HTML
          </div>
        </Parallax>
        <Parallax translateY={[-10, 20]}>
          <div
            ref={satelliteRefs[6]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            CSS
          </div>
        </Parallax>
      </div>

      {/* Satélites laterales */}
      <div className={styles.satellitesLeft}>
        <Parallax translateX={[-10, 10]}>
          <div
            ref={satelliteRefs[0]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            React
          </div>
        </Parallax>
        <Parallax translateX={[-5, 15]}>
          <div
            ref={satelliteRefs[1]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            Next.js
          </div>
        </Parallax>
      </div>

      {/* Chip central */}
      <Parallax translateY={[-10, 10]} scale={[0.98, 1.02]}>
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
      </Parallax>

      {/* Satélites laterales derechos */}
      <div className={styles.satellitesRight}>
        <Parallax translateX={[15, -10]}>
          <div
            ref={satelliteRefs[2]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            Firebase
          </div>
        </Parallax>

        <Parallax translateX={[10, -15]}>
          <div
            ref={satelliteRefs[3]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            Tailwind
          </div>
        </Parallax>

        <Parallax translateX={[5, -20]}>
          <div
            ref={satelliteRefs[4]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            Astro
          </div>
        </Parallax>
      </div>

      {/* Satélites abajo */}
      <div className={styles.satellitesBottom}>
        <Parallax translateY={[10, -10]}>
          <div
            ref={satelliteRefs[10]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            NodeJs
          </div>
        </Parallax>
        <Parallax translateY={[15, -15]}>
          <div
            ref={satelliteRefs[7]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            Git
          </div>
        </Parallax>
        <Parallax translateY={[20, -20]}>
          <div
            ref={satelliteRefs[8]}
            className={`${styles.satellite} ${
              isHovering ? styles.satelliteHover : ""
            }`}
          >
            Vercel
          </div>
        </Parallax>
      </div>
    </div>
  );
}
