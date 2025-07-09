// Blog landing page. blog/page.tsx.

import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

// Gets metadata for all posts.
async function getPosts() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map(fileName => {
        // Remove ".mdx" from file name to get post id.
        const post_id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string.
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section.
        const matterResult = matter(fileContents);

        // Combine the data with the post_id.
        return {
            post_id,
            ...matterResult.data as { title: string; date: string; description: string },
        };
    });

    // Sort posts by date.
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}


export default async function BlogLandingPage() {
    const posts = await getPosts();

    return (
        <div>
            {/* Header Banner */}
            <header className="bg-white py-4 px-8 border-b border-gray-400">
                <nav className="max-w-5xl mx-auto flex justify-start items-center gap-x-6">
                    <Link href="/" className="font-semibold text-gray-700 hover:text-black hover:underline transition-colors">
                        About
                    </Link>
                </nav>
            </header>

            <main className="max-w-3xl mx-auto p-8">
                <div>
                    {posts.map(post => (
                        <Link href={`/blog/${post.post_id}`} key={post.post_id} className="block group">
                            <div className="py-6 flex justify-between items-baseline border-b border-gray-200">
                                {/* Left side: Title and Description */}
                                <div>
                                    <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mt-2">{post.description}</p>
                                </div>

                                {/* Right side: Date */}
                                <p className="text-sm text-gray-500 ml-6 flex-shrink-0">
                                    {new Date(post.date).toLocaleDateString('en-US', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>


            </main>
        </div>
    );
}
