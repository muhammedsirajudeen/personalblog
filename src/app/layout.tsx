import type React from "react"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import "./globals.css"

// // In your layout.js or page.js file
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${spaceGrotesk.variable}`}>
//       {/* Rest of your layout */}
//     </html>
//   );
// }


export const metadata: Metadata = {
  title: "Muhammed Sirajudeen | Full Stack Engineer | Researcher | Indie Hacker",
  description: "Portfolio of Muhammed Sirajudeen, a MERN Stack Developer with experience in multiple tech stacks.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-white text-gray-900`}>{children}</body>
    </html>
  )
}
