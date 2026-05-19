"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === "/projects" ? pathname === "/projects" : false

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8 lg:px-12">

          {/* LOGO */}
          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-[0.22em] text-black transition-opacity hover:opacity-50"
          >
            Muhammed Sirajudeen
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center md:flex">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    group relative text-sm font-medium uppercase tracking-[0.18em] transition-colors
                    ${isActive(item.href) ? "text-black" : "text-zinc-400 hover:text-black"}
                  `}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
                    className={`
                      absolute -bottom-0.5 left-0 h-px bg-black transition-all duration-300
                      ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              ))}
            </div>
          </nav>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-black transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-black transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>

        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`
          fixed inset-0 z-40 bg-white transition-all duration-300 md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        style={{ top: "64px" }} // height of header
      >
        <nav className="flex h-full flex-col justify-center px-8">
          <ul className="space-y-1">
            {navItems.map((item, i) => (
              <li
                key={item.label}
                className="overflow-hidden"
                style={{
                  transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    group flex items-center justify-between border-b border-zinc-100 py-5
                    text-2xl font-medium uppercase tracking-[0.16em] transition-colors
                    ${isActive(item.href) ? "text-black" : "text-zinc-400 hover:text-black"}
                    ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                    transition-all duration-300
                  `}
                >
                  <span>{item.label}</span>
                  {/* Arrow */}
                  <svg
                    className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    fill="none"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer in menu */}
          <p className="absolute bottom-10 left-8 text-xs uppercase tracking-[0.2em] text-zinc-300">
            © {new Date().getFullYear()} Muhammed Sirajudeen
          </p>
        </nav>
      </div>
    </>
  )
}