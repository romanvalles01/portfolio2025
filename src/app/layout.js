import "./globals.css";
import Header from "./Components/Header/Header";
import { Rajdhani, Orbitron } from "next/font/google";
import ParallaxWrapper from "./Providers/ParallaxWrapper";
export const metadata = {
  title: "Román Valles – Frontend Dev / UI UX",
  description: "Portfolio Román Valles, Frontend Developer y Diseñador UI/UX.",
  metadataBase: new URL("https://www.romanvalles.dev"),

  openGraph: {
    title: "Román Valles – Frontend Dev / UI UX",
    description:
      "Portfolio Román Valles, Frontend Developer y Diseñador UI/UX.",
    url: "/",
    siteName: "Román Valles Portfolio",
    images: [
      {
        url: "/statics/cardHead.png",
        width: 1200,
        height: 630,
        alt: "Román Valles – Frontend Dev / UI UX",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Román Valles – Frontend Dev / UI UX",
    description:
      "Portfolio Román Valles, Frontend Developer y Diseñador UI/UX.",
    images: ["/statics/cardHead.png"],
  },
};
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
        <ParallaxWrapper>{children}</ParallaxWrapper>
      </body>
    </html>
  );
}
