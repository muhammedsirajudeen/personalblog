import { readdir } from "fs/promises"
import Link from "next/link"
import path from "path"
import { ExternalLink, FileText, Github, Linkedin, Mail, Terminal, ChevronRight, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default async function Home() {
  const postsDir = path.join(process.cwd(), "src/posts")
  const files = await readdir(postsDir)

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e2e2e6]">


      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-24 flex flex-col items-center text-center">
          <h1 className="font-light text-5xl md:text-6xl mb-4 tracking-tight animate-in fade-in-50 slide-in-from-bottom-5 duration-700">
            MUHAMMED SIRAJUDEEN
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-[#a0a0b0] mb-8 animate-in fade-in-50 slide-in-from-bottom-5 duration-1000">
            <span className="inline-block">FULL STACK ENGINEER</span> <span className="mx-2 opacity-40">|</span>
            <span className="inline-block">RESEARCHER</span> <span className="mx-2 opacity-40">|</span>
            <span className="inline-block">INDIE HACKER</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-8 animate-in fade-in-50 slide-in-from-bottom-5 duration-1000">
            <a href="tel:+917907140006" className="flex items-center gap-1 hover:text-[#60a5fa] transition-colors">
              <Terminal size={16} /> +917907140006
            </a>
            <a
              href="mailto:muhammedsirajudeen29@gmail.com"
              className="flex items-center gap-1 hover:text-[#60a5fa] transition-colors"
            >
              <Mail size={16} /> muhammedsirajudeen29@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/muhammedsirajudeen"
              className="flex items-center gap-1 hover:text-[#60a5fa] transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/muhammedsirajudeen"
              className="flex items-center gap-1 hover:text-[#60a5fa] transition-colors"
            >
              <Github size={16} /> Github
            </a>
            <a
              href="https://medium.com/@muhammedsirajudeen"
              className="flex items-center gap-1 hover:text-[#60a5fa] transition-colors"
            >
              <ExternalLink size={16} /> Medium
            </a>
            <a
              href="https://dev.to/muhammedsirajudeen"
              className="flex items-center gap-1 hover:text-[#60a5fa] transition-colors"
            >
              <ExternalLink size={16} /> Dev.to
            </a>
            <a
              href="https://leetcode.com/muhammedsirajudeen"
              className="flex items-center gap-1 hover:text-[#60a5fa] transition-colors"
            >
              <ExternalLink size={16} /> Leetcode
            </a>
          </div>

          <div className="flex gap-4 animate-in fade-in-50 slide-in-from-bottom-5 duration-1000">
            <Button asChild className="bg-[#60a5fa] hover:bg-[#60a5fa]/90 text-white border-none shadow-md shadow-[#60a5fa]/20">
              <Link href="#blog">Read My Blog</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#2e2e34] bg-[#111114] hover:bg-[#16161c] text-[#e2e2e6]">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px flex-1 bg-[#1e1e24]"></div>
            <h2 className="text-2xl font-light tracking-tight">ABOUT</h2>
            <div className="h-px flex-1 bg-[#1e1e24]"></div>
          </div>

          <Card className="border-none shadow-lg bg-gradient-to-br from-[#111114] to-[#0a0a0c]">
            <CardContent className="p-8 ">
              <p className="text-sm text-card-foreground/90 leading-relaxed">
                A passionate Software Engineer with extensive hands-on experience across multiple tech stacks, driven by
                curiosity and a deep interest in problem-solving. Has been building software for over half a decade,
                with broad exposure to various technologies, and currently specializes in developing scalable systems
                using the MERN stack. Possesses extensive knowledge in web security, ensuring secure and robust software
                solutions. Additionally, deeply interested in distributed systems, focusing on building systems that
                scale efficiently and handle complex workflows seamlessly.
              </p>
            </CardContent>
          </Card>
        </section>



        {/* Blog Posts Section */}
        <section id="blog" className="mb-24 scroll-mt-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px flex-1 bg-[#1e1e24]"></div>
            <h2 className="text-2xl font-light tracking-tight">BLOG POSTS</h2>
            <div className="h-px flex-1 bg-[#1e1e24]"></div>
          </div>

          <div className="grid gap-6">
            {files.length > 0 ? (
              files.map((file, index) => (
                <Link key={index} href={`/post/${file}`} className="group">
                  <Card className="overflow-hidden border-none shadow-md group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#111114] to-[#0a0a0c]">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#60a5fa]/10 p-3 rounded-lg">
                            <FileText size={24} className="text-[#60a5fa]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium group-hover:text-[#60a5fa] transition-colors">
                              {file.replace(/\.(md|mdx)$/, "").replace(/-/g, " ")}
                            </h3>
                            <div className="flex items-center text-sm text-[#a0a0b0] mt-1">
                              <Calendar size={14} className="mr-1" />
                              <span>{new Date().toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight
                          size={20}
                          className="text-[#a0a0b0] group-hover:text-[#60a5fa] transition-colors group-hover:translate-x-1 duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <Card className="border-none shadow-md bg-gradient-to-br from-[#111114] to-[#0a0a0c]">
                <CardContent className="p-6 text-center text-[#a0a0b0]">
                  <p>No blog posts found.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* External Writing Section */}
        <section id="writing" className="mb-24 scroll-mt-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px flex-1 bg-[#1e1e24]"></div>
            <h2 className="text-2xl font-light tracking-tight">EXTERNAL WRITING</h2>
            <div className="h-px flex-1 bg-[#1e1e24]"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <a href="https://medium.com/@yourusername" className="group" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden h-full border-none shadow-md group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#111114] to-[#0a0a0c]">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#60a5fa]/10 p-3 rounded-lg">
                        <ExternalLink size={24} className="text-[#60a5fa]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium group-hover:text-[#60a5fa] transition-colors">
                          Medium Articles
                        </h3>
                        <p className="text-sm text-[#a0a0b0] mt-1">View all my articles on Medium</p>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-[#a0a0b0] group-hover:text-[#60a5fa] transition-colors group-hover:translate-x-1 duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://dev.to/yourusername" className="group" target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden h-full border-none shadow-md group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#111114] to-[#0a0a0c]">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#60a5fa]/10 p-3 rounded-lg">
                        <ExternalLink size={24} className="text-[#60a5fa]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium group-hover:text-[#60a5fa] transition-colors">
                          Dev.to Articles
                        </h3>
                        <p className="text-sm text-[#a0a0b0] mt-1">View all my articles on Dev.to</p>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-[#a0a0b0] group-hover:text-[#60a5fa] transition-colors group-hover:translate-x-1 duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e1e24] py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#a0a0b0]">
              © {new Date().getFullYear()} Muhammed Sirajudeen. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                className="text-[#a0a0b0] hover:text-[#60a5fa] transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-[#a0a0b0] hover:text-[#60a5fa] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://medium.com/@yourusername"
                className="text-[#a0a0b0] hover:text-[#60a5fa] transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
