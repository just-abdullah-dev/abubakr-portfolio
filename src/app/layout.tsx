import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Define the custom fonts using localFont
const lufga = localFont({
  src: [
    { path: "/fonts/LufgaRegular.woff", weight: "400", style: "normal" },
    { path: "/fonts/LufgaItalic.woff", weight: "400", style: "italic" },
    { path: "/fonts/LufgaThin.woff", weight: "100", style: "normal" },
    { path: "/fonts/LufgaThinItalic.woff", weight: "100", style: "italic" },
    { path: "/fonts/LufgaExtraLight.woff", weight: "200", style: "normal" },
    { path: "/fonts/LufgaExtraLightItalic.woff", weight: "200", style: "italic" },
    { path: "/fonts/LufgaLight.woff", weight: "300", style: "normal" },
    { path: "/fonts/LufgaLightItalic.woff", weight: "300", style: "italic" },
    { path: "/fonts/LufgaMedium.woff", weight: "500", style: "normal" },
    { path: "/fonts/LufgaMediumItalic.woff", weight: "500", style: "italic" },
    { path: "/fonts/LufgaSemiBold.woff", weight: "600", style: "normal" },
    { path: "/fonts/LufgaSemiBoldItalic.woff", weight: "600", style: "italic" },
    { path: "/fonts/LufgaBold.woff", weight: "700", style: "normal" },
    { path: "/fonts/LufgaBoldItalic.woff", weight: "700", style: "italic" },
    { path: "/fonts/LufgaExtraBold.woff", weight: "800", style: "normal" },
    { path: "/fonts/LufgaExtraBoldItalic.woff", weight: "800", style: "italic" },
    { path: "/fonts/LufgaBlack.woff", weight: "900", style: "normal" },
    { path: "/fonts/LufgaBlackItalic.woff", weight: "900", style: "italic" },
  ],
  variable: "--font-lufga",
  weight: "100 900",
});

// Define metadata
export const metadata: Metadata = {
  title: "Abu Bakr - Portfolio",
  description: "Welcome to Abu Bakr's portfolio website. Explore projects, web development skills, and coding expertise.",
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lufga.variable} antialiased`} // Applying the custom font
         >
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}