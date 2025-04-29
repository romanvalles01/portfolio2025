"use client";
import "./globals.css";
import Header from "./Components/Header/Header";
import { Rajdhani, Orbitron } from "next/font/google";

const rajdhaniFont = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--rajdhani-font",
});

const orbitronFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--orbitron-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${rajdhaniFont.className} ${orbitronFont.className}`}>
        {" "}
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
