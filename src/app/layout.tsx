import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { CONTENT } from "@/content";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["800", "900"],
});

export const metadata: Metadata = {
  title: CONTENT.meta.title,
  description: CONTENT.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
