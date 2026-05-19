import { readFile } from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  const filePath = path.join(process.cwd(), "src/posts", slug)
  const fileContent = await readFile(filePath, "utf-8")

  const { data, content } = matter(fileContent)
  const htmlContent = marked(content)

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto w-full max-w-3xl px-6 py-16">
        <Link
          href="/#blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-black"
        >
          <ArrowLeft size={16} />
          <span>Back to all posts</span>
        </Link>

        <article>
          {data.date && (
            <div className="mb-4 text-sm text-neutral-500">
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          )}

          <h1 className="mb-6 text-4xl font-semibold tracking-tight">
            {data.title}
          </h1>

          {data.tags && (
            <div className="mb-10 flex flex-wrap gap-2">
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div
            className="
              max-w-none
              prose-headings:font-semibold
              prose-headings:tracking-tight
              prose-p:text-neutral-700
              prose-p:leading-8
              prose-a:text-black
              prose-a:no-underline
              hover:prose-a:underline
              prose-code:text-black
              prose-pre:bg-neutral-100
              prose-pre:text-black
              prose-strong:text-black
              prose-blockquote:border-neutral-300
              prose-blockquote:text-neutral-600
              prose-li:text-neutral-700
              prose-img:rounded-xl
              text-black
            "
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </main>


    </div>
  )
}