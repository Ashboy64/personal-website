// Dynamically generated route for each blog post.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

// Import LaTeX plugins.
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This function gets the content for a single post.
async function getPost(post_id: string) {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const fullPath = path.join(postsDirectory, `${post_id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { content, data } = matter(fileContents);

    return {
        content,
        meta: data as { title: string; date: string; description: string; },
    };
}

// This function generates the routes for all posts at build time.
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map(filename => ({
        slug: filename.replace(/\.mdx$/, ''),
    }));
}

// Component for the blog post.
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { content, meta } = await getPost(slug);

    return (
        <main className="max-w-3xl mx-auto p-8">
            <h1 className="text-5xl font-bold mb-2 mt-16">{meta.title}</h1>
            <p className="text-gray-500 mb-8">{new Date(meta.date).toLocaleDateString('en-US', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <article className="prose lg:prose-lg">
                <MDXRemote
                    source={content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkMath],
                            rehypePlugins: [rehypeKatex],
                        },
                    }}
                />
            </article>
        </main>
    );
}
