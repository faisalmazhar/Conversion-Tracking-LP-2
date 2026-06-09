import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/css/Header.css";
import "@/components/css/Hero.css";
import "@/components/css/LogoBrands.css";
import "@/components/css/Mirror.css";
import "@/components/css/CostOfBadTracking.css";
import "@/components/css/HubSpotPopup.css";
import "@/components/css/Process.css";
import "@/components/css/Services.css";
import "@/components/css/Testimonials.css";
import "@/components/css/WhyUs.css";
import "@/components/css/FinalCTA.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conversion Tracking Setup",
  description: "Conversion tracking setup landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}