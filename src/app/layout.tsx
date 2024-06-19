import type { Metadata } from "next";
import { Inter, Playfair_Display_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const play = Playfair_Display_SC({ 
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "LM-Art",
  description: "built by nerraf-dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={play.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
