'use server'

import { readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), "src/posts", slug);
    const fileContent = await readFile(filePath, "utf-8");
    const { content } = matter(fileContent);
    const htmlContent = marked(content);

    return (
        <div>
            <h1>Post: {slug}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
}