import { useRouter } from "next/router"

export default function Postpage() {
  const router = useRouter();
  console.log(router.query.slug); //retorna o índice da página

  //Para rotas dinâmicas, precisamos nomear o arquivo da seguinte maneira [slug], dessa forma conseguimos acessar outro endereço mesmo não estando na mesma cadeia de arquivos dele. 

  
  return (
    <div>
      <h2>Post</h2>
    </div>
  )
}