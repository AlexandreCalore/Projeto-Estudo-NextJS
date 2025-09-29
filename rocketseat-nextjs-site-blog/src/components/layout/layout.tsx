import { Header } from "../header"

export const Layout = () => {
  return(
    <div className="relative flex min-h-screen flex-col dark">
        <Header/>
        <main className="flex-1 flex flex-col mb-12">

        </main>
    </div>
  )
}