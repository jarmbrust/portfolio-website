import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Armbrust - Portfolio",
  description: "Portfolio of James Armbrust, showcasing projects, resume, and other stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white h-screen flex flex-col`}
      >
        <nav className="w-full flex justify-center py-6 bg-gray-900 border-b border-gray-800">
          <ul className="flex gap-8 text-lg font-semibold">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/resume" className="hover:underline">Resume</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">Projects</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1 flex flex-col px-4 sm:px-8 md:px-32 bg-gray-950">{children}</main>
      </body>
    </html>
  );
}
