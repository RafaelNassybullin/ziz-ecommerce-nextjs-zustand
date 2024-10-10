import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const antonRegular = localFont({
  src: "../fonts/Anton-Regular.ttf",
  variable: "--font-anton-regular",
  weight: "900",
});


export const metadata: Metadata = {
  title: "Ziz интернет магазин",
  description: "Лучшие продажи товаров в мире",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${antonRegular.variable} antialiased pt-[94px] bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
