import  Image  from "next/image"
import  Link  from "next/link"

export const Footer = () => {
  return(
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-2">
          <Link href='/'>
            <Image 
            src ="/logo.svg"
            alt="Logo site"
            width={116}
            height={32}
            />
          </Link>

          <nav className="flex flex-col"></nav>
        </div>
      </div>
    </footer>
  )
}