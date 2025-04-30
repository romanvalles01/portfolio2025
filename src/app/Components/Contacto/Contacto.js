"use client";
import React from "react";
import styles from "./contacto.module.css";

export default function Contacto() {
  return (
    <section id="contacto" className={styles.contactoSection}>
      <div className={styles.formContainer}>
        <span className={styles.leftBarBack}></span>
        <span className={styles.leftBar}></span>
        <form
          className={styles.form}
          action="mailto:tuemail@ejemplo.com"
          method="POST"
          encType="text/plain"
        >
          <h2 className={styles.title}>Contacto</h2>

          <label className={styles.label}>
            Nombre
            <input type="text" name="name" required className={styles.input} />
          </label>

          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              required
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Mensaje
            <textarea
              name="message"
              rows="4"
              required
              className={styles.textarea}
            />
          </label>

          <button type="submit" className={styles.button}>
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
