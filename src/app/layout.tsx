import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Портфель на фондовом рынке — Татьяна Волкова",
  description: "Соберите свой первый инвестиционный портфель за 8 недель с системой, инструментами и поддержкой экспертов.",
  keywords: "инвестиции, фондовый рынок, акции, облигации, портфель, Татьяна Волкова, финансовая грамотность",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" style={{ scrollBehavior: "smooth" }}>
      <body className={`${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
