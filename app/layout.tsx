import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono} from "next/font/google";
import "./globals.css";
import LightRays from "@/Components/LightRay";
import React from "react";
import Navbar from "@/Components/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub for Every Event You Mustn't Miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
       <Navbar/>

       <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
             <LightRays
               raysSpeed={1.5}
                 className="custom-rays"
             />
         </div>

       <main>
           {children}

       </main>

      </body>
    </html>
  );
}
