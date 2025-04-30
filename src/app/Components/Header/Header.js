"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const sections = [
  "home",
  "proyectos",
  "habilidades",
  "experiencia",
  "contacto",
];

export default function Header() {
  const [activeSection, setActiveSection] = useState(null);
  const indicatorRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    if (!nav || !indicator || !activeSection) return;

    const items = nav.querySelectorAll("li");
    const activeItem = Array.from(items).find(
      (item) => item.textContent.toLowerCase() === activeSection
    );

    if (activeItem) {
      const { offsetLeft, offsetWidth } = activeItem;
      indicator.style.left = `${offsetLeft}px`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [activeSection]);

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

  // Detectar sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0% -10% 0%",
        threshold: 0.3,
      }
    );

    // Esperar al siguiente frame para asegurarse de que los elementos existen
    requestAnimationFrame(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
        console.log("Observando:", id);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <ul className={styles.ul} ref={navRef}>
        {sections.map((sec) => (
          <li
            key={sec}
            className={`${styles.li} ${
              activeSection === sec ? styles.active : ""
            }`}
            onClick={() => {
              const el = document.getElementById(sec);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {sec.toUpperCase()}
          </li>
        ))}
        <span className={styles.indicator} ref={indicatorRef}></span>
      </ul>
    </header>
  );
}
