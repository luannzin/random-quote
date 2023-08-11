import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Random Quote Generator",
  description: "Made by luannzin with ❤",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0070f3" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
