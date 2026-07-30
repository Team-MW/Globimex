import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Globimex | Construcción y Renovación",
  description: "Especialistas en obra gruesa, obra fina, renovación energética, interiorismo, paisajismo y dirección de obra.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{children}</body>
    </html>
  );
}
