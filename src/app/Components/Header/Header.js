"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import {
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const sectionData = [
  { id: "home", label: "HOME", icon: <FaHome /> },
  { id: "proyectos", label: "PROYECTOS", icon: <FaProjectDiagram /> },
  { id: "habilidades", label: "HABILIDADES", icon: <FaTools /> },
  { id: "experiencia", label: "EXPERIENCIA", icon: <FaBriefcase /> },
  { id: "contacto", label: "CONTACTO", icon: <FaEnvelope /> },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState(null);
  const indicatorRef = useRef(null);
  const navRef = useRef(null);

  // Indicador para menú horizontal
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

    requestAnimationFrame(() => {
      sectionData.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <header className={styles.header}>
        <ul className={styles.ul} ref={navRef}>
          {sectionData.map(({ id, label }) => (
            <li
              key={id}
              className={`${styles.li} ${
                activeSection === id ? styles.active : ""
              }`}
              onClick={() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {label}
            </li>
          ))}
          <span className={styles.indicator} ref={indicatorRef}></span>
        </ul>
      </header>

      {/* Mobile Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.vaporlayer}></div>
        <div>
          {" "}
          <span className={styles.iconListBack}></span>
          <ul className={styles.iconList}>
            {sectionData.map(({ id, icon }) => (
              <li
                key={id}
                className={`${styles.iconItem} ${
                  activeSection === id ? styles.activeIcon : ""
                }`}
                onClick={() => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                title={id}
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
