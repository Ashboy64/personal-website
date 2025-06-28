// Personal website landing page.
import Image from "next/image";
import Link from "next/link";

import React from 'react';


const isProd = process.env.NODE_ENV === 'production';

// Greeting on home page.
function Greeting() {
  return <h1 className="text-5xl font-bold mb-8">Hello!</h1>;
}

// Blog, resume, and social media links.
function Links() {
  const resumeUrl = (isProd ? "/personal_website/" : "/") + "resume.pdf";
  const twitterUrl = "https://x.com/Ashboy64";
  const linkedinUrl = "https://www.linkedin.com/in/ashishprao/";

  return (
    <div className="flex flex-row gap-6 mt-6">
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

// Greeting, bio, and links to display on home page.
function GreetingAndBio() {
  return (
    <div className="max-w-lg">
      <Greeting />
      <p className="text-lg">
        I&apos;m Ashish Rao, a software engineer at Nvidia working on JAX
        (a Python library to write hardware accelerated numerical programs).
        I&apos;m broadly interested in AI, programming languages, compilers,
        and distributed systems. In my free time, I like reading and going
        swing dancing. Check out my blog, and feel free to say hello via email
        to <em>ashish dot arartc at gmail.com</em>.
      </p>
      <Links />
    </div>
  );
}

// Profile picture to display on home page.
function ProfilePicture() {
  return <Image src={(isProd ? "/personal_website/" : "/") + "rome_photo.jpg"} width={400} height={400} alt="Picture of Ashish Rao" className="rounded-lg" />;
}

// Main home page component.
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex flex-row items-center justify-center gap-32">
        <GreetingAndBio />
        <ProfilePicture />
      </div>
    </main >
  );
}
