import { Montserrat, Oxanium } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://the-code-breakers-five.vercel.app'),
  title: "TheCodeBreakers Club - Breaking Codes, Creating Minds",
  description: "A passionate student community empowering members across all backgrounds to discover, learn, and shine in tech and creative fields.",
  keywords: "coding club, tech community, student organization, programming, web development, machine learning",
  authors: [{ name: "TheCodeBreakers Club" }],
  icons: {
    icon: [
      { url: '/tcb.webp' },
      { url: '/tcb.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/tcb.webp', sizes: '16x16', type: 'image/webp' },
    ],
    apple: [
      { url: '/tcb.webp' },
    ],
    shortcut: ['/tcb.webp'],
  },
  openGraph: {
    title: "TheCodeBreakers Club",
    description: "Breaking Codes, Creating Minds",
    type: "website",
    images: [{ url: '/tcb.webp' }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${oxanium.variable} antialiased`}>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
