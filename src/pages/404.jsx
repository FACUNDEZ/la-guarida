import { useRouter } from "next/router"

function Error404() {
  const router = useRouter()
  return (
    <>
    <button onClick={() => router.push("/")} className="w-25 h-10 shrink-0 mt-4 ml-4 rounded-md border border-sky-400 bg-sky-400 py-2 px-5 text-md font-medium text-white transition hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400">Volver</button>
    <section className="h-full py-52 flex flex-col justify-center items-center">
    <h1 className="text-6xl font-extrabold text-sky-400">404</h1>
    <p className="text-6xl font-semibold text-center">Página no encontrada</p>
    </section>
    </>
  )
}

export default Error404