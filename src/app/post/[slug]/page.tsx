import { readFile } from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PostPageProps {
  params:Promise< { slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "src/posts", slug)
  const fileContent = await readFile(filePath, "utf-8")
  const { data, content } = matter(fileContent)
  const htmlContent = marked(content)

  return (
    <div className="min-h-screen bg-black text-white">

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/#blog" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={16} />
          <span>Back to all posts</span>
        </Link>

        <article className="prose prose-invert max-w-none">
          {data.date && (
            <div className="text-gray-400 mb-8">
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          )}

          {data.tags && (
            <div className="flex gap-2 mb-8">
              {data.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="leading-relaxed" />
        </article>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">© {new Date().getFullYear()} Muhammed Sirajudeen</div>
          <div className="flex gap-4">
            <a href="mailto:muhammedsirajudeen29@gmail.com" className="text-gray-400 hover:text-white">
              Email
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
