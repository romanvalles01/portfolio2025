"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./leftBar.module.css";

const randomWords = [
  "const",
  "let",
  "function",
  "=>",
  "return",
  "if",
  "else",
  "true",
  "false",
  "null",
  "undefined",
  "class",
  "import",
  "export",
  "while",
  "for",
  "new",
  "async",
  "await",
  "try",
  "catch",
];

function generateRandomLine() {
  const wordCount = Math.floor(Math.random() * 5) + 2; // entre 2 y 6 palabras
  let line = "";
  for (let i = 0; i < wordCount; i++) {
    const randomWord =
      randomWords[Math.floor(Math.random() * randomWords.length)];
    line += randomWord + " ";
  }
  return line.trim() + ";";
}

export default function LeftBar() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) => {
        const newLine = generateRandomLine();
        const updatedLines = [...prevLines, newLine];
        if (updatedLines.length > 40) updatedLines.shift();
        return updatedLines;
      });
    }, 500); // cada 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.leftBarWrapper}>
        <div className={styles.leftBarContent}>
          {lines.map((line, index) => (
            <div key={index} className={styles.line}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
