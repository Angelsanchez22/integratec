import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Integratec Soluciones | Tecnología y Seguridad",
  description: "Integratec Soluciones ofrece servicios de automatización, seguridad electrónica, redes, energía y conectividad.",
  
  icons: {
    icon: "/Futuristic IT Monogram App Icon.ico"
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
