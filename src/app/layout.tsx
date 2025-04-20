import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Space_Grotesk } from 'next/font/google';

import NavBar from "@/components/NavBar";
import "./globals.css"
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});



export const metadata: Metadata = {
  title: "Muhammed Sirajudeen | Full Stack Engineer | Researcher | Indie Hacker",
  description: "Portfolio of Muhammed Sirajudeen, a MERN Stack Developer with experience in multiple tech stacks.",
  openGraph: {
    title: "Muhammed Sirajudeen | Full Stack Engineer | Researcher | Indie Hacker",
    description: "Portfolio of Muhammed Sirajudeen, a MERN Stack Developer with experience in multiple tech stacks.",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "https://muhammedsirajudeen.in/rick.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Sirajudeen Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Sirajudeen | Full Stack Engineer | Researcher | Indie Hacker",
    description: "Portfolio of Muhammed Sirajudeen, a MERN Stack Developer with experience in multiple tech stacks.",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-white text-gray-900`}>
        <Analytics/>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
