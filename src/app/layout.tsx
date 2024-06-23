import type { Metadata } from "next";
import { Inter, Playfair } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Hero from '@/components/Hero';
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const playfairBlack = localFont({ 
  src: 'fonts/Playfair_Display_SC/PlayfairDisplaySC-Black.ttf',
  variable: '--font-playfair-black'
});
const playfairBold = localFont({ 
  src: 'fonts/Playfair_Display_SC/PlayfairDisplaySC-Bold.ttf',
  variable: '--font-playfair-bold'
});
const playfairRegular = localFont({ 
  src: 'fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.ttf',
  variable: '--font-playfair-regular'
});
const playfairItalic = localFont({ 
  src: 'fonts/Playfair_Display_SC/PlayfairDisplaySC-Italic.ttf',
  variable: '--font-playfair-italic'
});

const pfd = Playfair({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-pfd'
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
    <html lang="en" className={pfd.className}>
      {/* <body className={play.className}> */}
      <body>
        <Header />
        <Hero heading="" message="Art is the cure for the soul." />
        {children}
      </body>
    </html>
  );
}
