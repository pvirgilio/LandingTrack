import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import style from "./page.module.css";
import { Nav } from "./components/Nav/Nav";

const Jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Landing Track",
  description: "Gerenciar a otimização de processos nas landing pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${Jakarta.className} ${style.body}`}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
