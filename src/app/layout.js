import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Casamento Samanta & Werick",
  description: "Casamento Samanta & Werickapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width:device-width, initial-scale=1" />
        {/* Adicionando o favicon */}
        <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/android-chrome-192x192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/img/favicon/android-chrome-512x512.png" />

  {/* Manifest para PWA */}
  <link rel="manifest" href="/img/favicon/site.webmanifest" />
 
      </head>
      <body>{children}</body>
    </html>
  );
}
