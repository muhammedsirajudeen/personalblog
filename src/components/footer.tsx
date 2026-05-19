import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            © {new Date().getFullYear()} Muhammed Sirajudeen
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Ciltriq Technologies LLP
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <Link
            href="mailto:muhammedsirajudeen29@gmail.com"
            className="text-zinc-500 hover:text-black transition-colors"
          >
            <Mail size={18} />
          </Link>

          <Link
            href="https://github.com/muhammedsirajudeen"
            target="_blank"
            className="text-zinc-500 hover:text-black transition-colors"
          >
            <Github size={18} />
          </Link>

          <Link
            href="https://linkedin.com/in/muhammedsirajudeen"
            target="_blank"
            className="text-zinc-500 hover:text-black transition-colors"
          >
            <Linkedin size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}