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
  title: "Muhammed Sirajudeen | Freelancer from Kerala | Full Stack Engineer | Software Developer",
  description: "Portfolio of Muhammed Sirajudeen, a freelancer from Kerala specializing in MERN Stack Development and other modern technologies.",
  keywords: ["Muhammed Sirajudeen","muhammed sirajudeen","freelancer", "kerala", "full stack engineer", "software developer", "mern stack"],
  openGraph: {
    title: "Muhammed Sirajudeen | Freelancer from Kerala | Full Stack Engineer | Software Developer",
    description: "Portfolio of Muhammed Sirajudeen, a freelancer from Kerala specializing in MERN Stack Development and other modern technologies.",
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
    title: "Muhammed Sirajudeen | Freelancer from Kerala | Full Stack Engineer | Software Developer",
    description: "Portfolio of Muhammed Sirajudeen, a freelancer from Kerala specializing in MERN Stack Development and other modern technologies.",
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
