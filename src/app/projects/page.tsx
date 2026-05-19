import type { Metadata } from "next";
import ProjectsSection from "./project.component";

export const metadata: Metadata = {
  title: "Selected Work | Muhammed Sirajudeen",
  description:
    "A curated collection of product design, SaaS, community, and web development projects built by Muhammed Sirajudeen.",
  keywords: [
    "Muhammed Sirajudeen",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "UI UX",
    "Frontend Developer",
    "Kerala Developer",
    "Projects",
    "SaaS",
  ],
  openGraph: {
    title: "Selected Work | Muhammed Sirajudeen",
    description:
      "Explore selected projects spanning SaaS, community platforms, and modern web experiences.",
    url: "https://muhammedsirajudeen.in/projects",
    siteName: "Muhammed Sirajudeen",
    images: [
      {
        url: "/og/projects-og.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Sirajudeen Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | Muhammed Sirajudeen",
    description:
      "Explore selected projects spanning SaaS, community platforms, and modern web experiences.",
    images: ["/profile/personal-og.png"],
  },
  alternates: {
    canonical: "https://muhammedsirajudeen.in/projects",
  },
};

export default function Page() {
  return <ProjectsSection />;
}