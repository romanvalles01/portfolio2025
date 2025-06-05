"use client";
import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.owner}>© 2025 Román Valles</p>

      <ul className={styles.footerLinks}>
        <li>
          <a href="https://github.com/romanvalles" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/romanvalles" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:romanvalles01@gmail.com">Email</a>
        </li>
        <li>
          <a href="/CV-RomanValles.pdf" download>
            Descargar CV
          </a>
        </li>
      </ul>
    </footer>
  );
}
