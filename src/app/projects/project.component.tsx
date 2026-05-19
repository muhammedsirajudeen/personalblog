import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
    {
      title: "Tydy Laundry Service Automation",
      category: "Business Automation · 2026",
      description:
        "An operations platform for a laundry service combining an admin dashboard with a WhatsApp automation bot. Built to manage orders, customer communication, and service workflows end-to-end — with Zoho Books integration for automated billing, invoicing, and financial tracking.",
      desktop: "/projects/tydy_desktop.png",
      mobile: "/projects/tydy_mobile.png",
      icon: "/projects/tydy_icon.png",
      tags: ["Admin panel", "WhatsApp bot", "Automation", "Zoho Books"],
      live: "https://wa.me/918590291351",
      completed: true,
    },
        {
      title: "Arikil Malayalam AI Friend",
      category: "Consumer App · 2026",
      description:
        "A Malayalam-first conversational AI app designed to provide a natural, culturally relevant chat experience. Built to enable users to interact in their native language with high-quality responses — achieving 1K+ downloads and growing as an accessible AI companion for everyday conversations.",
      desktop: "/projects/arikil_desktop.png",
      mobile: "/projects/arikil_mobile.png",
      icon: "/projects/arikil_icon.png",
      tags: ["AI", "Conversational AI", "Mobile app", "Malayalam"],
      live: "https://play.google.com/store/apps/details?id=com.ciltriq.arikil&hl=en_IN",
      completed: true,
    },
  {
    title: "FarmSphere",
    category: "Web · 2026",
    description:
      "A SaaS-focused landing page designed for an agritech intelligence product focused on conversion, clarity, and product positioning.",
    desktop: "/projects/farmsphere_desktop.png",
    mobile: "/projects/farmsphere_mobile.png",
    icon: "/projects/farmsphere_icon.png",
    tags: ["Landing Page", "AgriTech", "UI/UX"],
    live: "https://farmsphere.app",
    completed: true,
  },
  {
    title: "Digital Nomads Kerala",
    category: "Community · 2026",
    description:
      "A community-focused landing page built for Digital Nomads Kerala to attract remote workers, creators, founders, and freelancers.",
    desktop: "/projects/digitalnomadskerala_desktop.png",
    mobile: "/projects/digitalnomadskerala_mobile.png",
    icon: "/projects/cq_icon.png",
    tags: ["Community", "Remote Work", "Tourism"],
    live: "https://digitalnomadskerala.vercel.app",
    completed: true,
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-28 border-t border-zinc-200"
    >
      {/* HEADER */}
      <div className="flex items-end justify-between mb-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400 mb-4">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-[-0.05em] text-zinc-900">
            Selected Work
          </h2>
        </div>
        <p className="hidden md:block text-sm text-zinc-400 pb-2">
          {projects.length} projects
        </p>
      </div>

      {/* PROJECTS */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-zinc-200 rounded-3xl overflow-hidden bg-white"
          >
            <div className="grid lg:grid-cols-[1fr_320px]">

              {/* LEFT — content + desktop preview */}
              <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-200">

                {/* Desktop screenshot — flush, no wrapper border/shadow */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-50">
                  <Image
                    src={project.desktop}
                    alt={`${project.title} desktop`}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Subtle bottom fade so it blends into the content below */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Meta + CTA */}
                <div className="px-8 md:px-10 pt-6 pb-8 flex flex-col gap-5">

                  {/* Icon + category */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-xl overflow-hidden">
                      <Image
                        src={project.icon}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-500 leading-relaxed text-sm md:text-base max-w-lg">
                    {project.description}
                  </p>

                  {/* Tags + button row */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-zinc-100 text-xs text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}

                    <div className="ml-auto">
                      {project.completed ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition"
                        >
                          View Project
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-400 text-sm">
                          In Progress
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT — mobile screenshot, flush, centered */}
              <div className="bg-zinc-50 flex items-center justify-center p-10">
                <div className="relative w-[200px] aspect-[9/19] overflow-hidden rounded-[2rem]">
                  <Image
                    src={project.mobile}
                    alt={`${project.title} mobile`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}