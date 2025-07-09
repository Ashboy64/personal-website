// Personal website landing page.
import Image from "next/image";
import Link from "next/link";

import React from 'react';


// Greeting on home page.
function Greeting() {
  return <h1 className="text-5xl font-bold text-left">Hello!</h1>;
}

// Blog, resume, and social media links.
function Links() {
  const resumeUrl = "/personal-website/resume.pdf";
  const twitterUrl = "https://x.com/Ashboy64";
  const linkedinUrl = "https://www.linkedin.com/in/ashishprao/";

  return (
    <nav className="flex justify-start items-center gap-x-6">
      <Link href="/blog" className="flex items-center gap-2 font-semibold text-gray-700 hover:text-black hover:underline transition-colors">
        Blog
      </Link>
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-700 hover:text-black hover:underline transition-colors">
        Resume
      </a>
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-700 hover:text-black hover:underline transition-colors">
        Twitter
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-gray-700 hover:text-black hover:underline transition-colors">
        LinkedIn
      </a>
    </nav>
  );
}

function Bio() {
  return (
    <p className="text-lg">
      I&apos;m Ashish Rao, a soon-to-be software engineer at Nvidia working on JAX (a Python library to write hardware accelerated numerical programs).
      I&apos;m broadly interested in AI, programming languages, compilers,
      and distributed systems. Check out my blog, and feel free to say hello via email
      to <em>ashish dot arartc at gmail.com</em>.
    </p>
  );
}

// Profile picture to display on home page.
function ProfilePicture() {
  return <Image src="/personal-website/rome_photo.jpg" width={400} height={533} alt="Picture of Ashish Rao" className="rounded-lg" />;
}

export default function HomePage() {
  return (
    // On screens smaller than `lg`, this is a flex column, ensuring no overlap.
    // On `lg` screens and larger, it becomes a simple block container to enable
    // the absolute positioning layout for the header.
    <div className="min-h-screen flex flex-col lg:block">
      
      {/* On `lg` and up, the header is taken out of the document flow. */}
      <header className="bg-white py-4 px-8 border-b border-gray-400 z-10 lg:absolute lg:top-0 lg:w-full">
        <div className="max-w-5xl mx-auto">
          <Links />
        </div>
      </header>

      {/* On mobile, this grows to fill the available space below the header.
          On `lg` and up, flex-grow is disabled, and it spans the full screen
          height to allow for perfect centering. */}
      <main className="flex flex-grow items-center justify-center p-8 lg:flex-grow-0 lg:min-h-screen">
        <div className="max-w-5xl mx-auto w-full">
          {/* --- MOBILE LAYOUT --- */}
          <div className="flex flex-col items-center gap-8 md:hidden">
            <div className="w-full max-w-lg">
              <Greeting />
            </div>
            <ProfilePicture />
            <div className="max-w-lg text-left">
              <Bio />
            </div>
          </div>

          {/* --- DESKTOP LAYOUT --- */}
          <div className="hidden md:flex flex-row items-center gap-32">
            <div className="flex flex-col">
              <Greeting />
              <div className="mt-8">
                <div className="max-w-lg text-left">
                  <Bio />
                </div>
              </div>
            </div>
            <ProfilePicture />
          </div>
        </div>
      </main>
    </div>
  );
}
