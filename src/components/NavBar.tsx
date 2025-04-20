import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
    return(
        <header className="sticky top-0 z-10 backdrop-blur-sm bg-black border-b border-[#1e1e24] text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            <Image src={'/rick.png'} height={30} width={30} className="rounded-full" alt="rick"/>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-[#60a5fa] transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-[#60a5fa] transition-colors">
              Projects
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-[#60a5fa] transition-colors">
              Blog
            </Link>
            <Link href="#writing" className="text-sm font-medium hover:text-[#60a5fa] transition-colors">
              Writing
            </Link>
          </nav>
        </div>
      </header>
    )
}