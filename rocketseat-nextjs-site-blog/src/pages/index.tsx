import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { styleText } from "node:util";

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
    <Header /> 
    
    <h2>Hello world</h2>

    
    <Link href="/"> Página blog</Link>

    <Button variant={"secondary"}>Teste de botão</Button>
   </div>
  )
}
