"use client";
import "./globals.css";
import Header from "./Components/Header/Header";
import { Rajdhani, Orbitron } from "next/font/google";
import Head from "next/head"; // 👈 Agregá esto
import { ParallaxProvider } from "react-scroll-parallax";

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
      <Head>
        <title>Román Valles - Dev</title>
        <meta
          name="description"
          content="Portfolio Román Valles, Frontend Developer y Diseñador UI/UX."
        />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.romanvalles.dev" />
        <meta
          property="og:title"
          content="Román Valles – Frontend Dev / UI UX"
        />
        <meta
          property="og:description"
          content="Portfolio Román Valles, Frontend Developer y Diseñador UI/UX."
        />
        <meta
          property="og:image"
          content="https://www.romanvalles.dev/statics/cardHead.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.romanvalles.dev" />
        <meta
          name="twitter:title"
          content="Román Valles – Frontend Dev / UI UX"
        />
        <meta
          name="twitter:description"
          content="Portfolio Román Valles, Frontend Developer y Diseñador UI/UX."
        />
        <meta
          name="twitter:image"
          content="https://www.romanvalles.dev/statics/cardHead.png"
        />
      </Head>
      <body className={`${rajdhaniFont.className} ${orbitronFont.className}`}>
        {" "}
        <Header></Header>
        <ParallaxProvider> {children}</ParallaxProvider>
      </body>
    </html>
  );
}
