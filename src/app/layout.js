import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

config.autoAddCss = false; 

export const metadata = {
  title: "Botón persistente",
  description: "Practica de botones persistentes con WhatsApp y Facebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
