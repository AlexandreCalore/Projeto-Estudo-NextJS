import Link from "next/link"
import Image from "next/image"

export default  function UserPage() {
  return (
    <div>
      <Link href="/">Página index do User</Link>
      <h2>User</h2>

      <Image
      src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmundoeducacao.uol.com.br%2Ffisica%2Fo-sol.htm&psig=AOvVaw0XHOrb0A2LxmtK5LmvTH3N&ust=1758730884678000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjU86Cl748DFQAAAAAdAAAAABAE"
      width={500}
      height={300}
      alt="Imagem do sol"
      />

    </div>
  )
}