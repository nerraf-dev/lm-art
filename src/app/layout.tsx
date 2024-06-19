import type { Metadata } from "next";
import { Inter, Playfair_Display_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const playfairBlack = localFont({ src: 'fonts/Playfair_Display_SC/PlayfairDisplaySC-Black.ttf' });
const playfairBold = localFont({ src: 'fonts/Playfair_Display_SC/PlayfairDisplaySC-Bold.ttf' });
const playfairRegular = localFont({ src: 'fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.ttf' });
const playfairItalic = localFont({ src: 'fonts/Playfair_Display_SC/PlayfairDisplaySC-Italic.ttf' });


// const inter = Inter({ subsets: ["latin"] });
// const play = Playfair_Display_SC({
//   weight: '400',
//   subsets: ['latin'],
//   style: 'normal',
//   variable: '--font-playfair'
// });

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
    <html lang="en" className={playfairRegular.className}>
      {/* <body className={play.className}> */}
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
