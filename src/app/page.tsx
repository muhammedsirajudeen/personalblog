import { readdir } from "fs/promises"
import path from "path"
import Link from "next/link"

import {
  Github,
  Linkedin,
  Mail,
  Calendar,
} from "lucide-react"


export default async function Home() {
  const postsDir = path.join(process.cwd(), "src/posts")
  const files = await readdir(postsDir)

  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}

      <main>
        {/* HERO */}
        <section className="max-w-4xl mx-auto px-6 pt-28 pb-24 text-center">
          {/* NAME */}
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.12em] uppercase leading-none">
            Muhammed Sirajudeen
          </h1>

          {/* ROLE */}
          <p className="mt-8 text-sm md:text-base uppercase tracking-[0.28em] text-zinc-500">
            Freelance Full Stack Developer
          </p>

          {/* DESCRIPTION */}
          <div className="mt-10 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl leading-9 text-zinc-700 font-light">
              Running{" "}
              <span className="text-black font-medium">
                Ciltriq Technologies LLP
              </span>
              , an engineering-led software agency focused on scalable backend
              systems, internal platforms, automation tooling, and modern web
              applications.
            </p>
          </div>

          {/* SOCIALS */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-600">
            <a
              href="mailto:muhammedsirajudeen29@gmail.com"
              className="hover:text-black transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              Email
            </a>

            <a
              href="https://github.com/muhammedsirajudeen"
              target="_blank"
              className="hover:text-black transition-colors flex items-center gap-2"
            >
              <Github size={16} />
              Github
            </a>

            <a
              href="https://linkedin.com/in/muhammedsirajudeen"
              target="_blank"
              className="hover:text-black transition-colors flex items-center gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          {/* CTA */}
          <div className="mt-14 flex items-center justify-center gap-4">
            <Link
              href="/projects"
              className="bg-black text-white px-7 py-3 text-sm uppercase tracking-[0.15em] rounded-full hover:bg-zinc-800 transition-colors"
            >
              View Projects
            </Link>

            <Link
              href="#blog"
              className="border border-zinc-300 px-7 py-3 text-sm uppercase tracking-[0.15em] rounded-full hover:border-black transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-200"
        >
          <div className="grid md:grid-cols-3 gap-16">
            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                About
              </p>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-2 space-y-8">
              <p className="text-lg leading-9 text-zinc-700">
                I build scalable software systems with a strong focus on backend
                engineering, architecture, automation, and long-term
                maintainability. Over the years, I’ve worked across multiple
                stacks building APIs, dashboards, automation systems, and
                production-grade applications.
              </p>

              <p className="text-lg leading-9 text-zinc-700">
                My current focus is growing{" "}
                <span className="text-black font-medium">
                  Ciltriq Technologies LLP
                </span>{" "}
                into a highly capable engineering-led software agency delivering
                reliable systems for startups and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        {/* BLOG */}
        <section
          id="blog"
          className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-200"
        >
          {/* HEADER */}
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
              Writing
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
              Blog Posts
            </h2>
          </div>

          {/* POSTS */}
          <div className="space-y-10">
            {files.map((file, index) => (
              <Link
                key={index}
                href={`/post/${file}`}
                className="group block"
              >
                <div className="flex items-start justify-between gap-6 border-b border-zinc-100 pb-10">
                  <div>
                    <h3 className="text-2xl font-light tracking-tight group-hover:text-zinc-600 transition-colors">
                      {file
                        .replace(/\.(md|mdx)$/, "")
                        .replace(/-/g, " ")}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                      <Calendar size={14} />

                      <span>
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="max-w-5xl mx-auto px-6 py-24 border-t border-zinc-200"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-8">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Interested in working together?
            </h2>

            <p className="mt-8 text-lg leading-9 text-zinc-600">
              I work with startups and businesses building scalable software,
              backend systems, internal tools, dashboards, and automation
              platforms.
            </p>

            <div className="mt-10">
              <a
                href="mailto:muhammedsirajudeen29@gmail.com"
                className="inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full uppercase tracking-[0.18em] text-sm hover:bg-zinc-800 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
    </div>
  )
}