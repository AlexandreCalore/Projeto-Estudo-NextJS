import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
   <div>
    <h2>Hello world</h2>

    
    <Link href="/rocketseat-nextjs-site-blog/src/pages/blog/user/index.tsx"> Página blog</Link>
   </div>
  )
}
