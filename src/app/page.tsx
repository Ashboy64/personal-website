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

  // Centered on mobile, left-aligned on desktop.
  return (
    <div className="flex flex-row flex-wrap gap-6 mt-6 justify-center md:justify-start">
      <Link href="/blog" className="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-black hover:underline transition-colors">
        Blog
      </Link>
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-black hover:underline transition-colors">
        Resume
      </a>
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-black hover:underline transition-colors">
        Twitter
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-black hover:underline transition-colors">
        LinkedIn
      </a>
    </div>
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

// Main home page component.
export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen p-8">
      <div>

        {/* --- MOBILE LAYOUT --- */}
        {/* This entire div is a flex column, and it's HIDDEN on medium screens and up (md:hidden) */}
        <div className="flex flex-col items-center gap-8 md:hidden">
          <div className="w-full max-w-lg">
            <Greeting />
          </div>
          <ProfilePicture />
            <Links />

          <div className="max-w-lg text-left">
            <Bio />
          </div>

        </div>

        {/* --- DESKTOP LAYOUT --- */}
        {/* This entire div is HIDDEN by default and becomes a flex row on medium screens and up */}
        <div className="hidden md:flex flex-row items-center gap-32">
          {/* Desktop Text Container */}
          <div className="flex flex-col">
            <Greeting />
            {/* We add a margin-top here to create the space that was previously on the h1 */}
            <div className="mt-8">
              <div className="max-w-lg text-left">
                <Bio />
                <Links />
              </div>
            </div>
          </div>

          {/* Desktop Profile Picture */}
          <ProfilePicture />
        </div>

      </div>
    </main>
  );
}
