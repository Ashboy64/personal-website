import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css"; // Add this line

export const metadata: Metadata = {
  title: "Ashish Rao",
  description: "Ashish Rao Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
