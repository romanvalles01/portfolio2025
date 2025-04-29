"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const indicatorRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;

    if (!nav || !indicator) return;

    const items = nav.querySelectorAll("li");

    const handleEnter = (e) => {
      const { offsetLeft, offsetWidth } = e.target;
      indicator.style.left = `${offsetLeft}px`;
      indicator.style.width = `${offsetWidth}px`;
    };

    const handleLeave = () => {
      indicator.style.width = "0";
    };

    items.forEach((item) => {
      item.addEventListener("mouseenter", handleEnter);
      item.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", handleEnter);
        item.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <header className={styles.header}>
      <ul className={styles.ul} ref={navRef}>
        <li className={styles.li}>PROYECTOS</li>
        <li className={styles.li}>EXPERIENCIA</li>
        <li className={styles.li}>HABILIDADES</li>
        <li className={styles.li}>CONTACTO</li>
        <span className={styles.indicator} ref={indicatorRef}></span>
      </ul>
    </header>
  );
}
