import LandingFooter from "@/components/footer/LandingFooter";
import LandingNavbar from "@/components/navbar/LandingNavbar";
import OfferSection from "@/components/OfferSection";
import type { Metadata } from "next";
import { Cormorant_Garamond, Jost  } from "next/font/google";
import "./globals.css";
import "./style.scss";



const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royalist iq ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning={true}>
        <OfferSection />
        <LandingNavbar />
        {children}
        <LandingFooter />
      </body>
    </html>
  );
}
