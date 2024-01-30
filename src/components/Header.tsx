import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";

function Header() {
    const router = useRouter()
    return (
        <header className="w-screen h-20 fixed top-0 left-0 lg:px-14 bg-sky-400 flex justify-between items-center z-50 overflow-hidden font-primary">
            <Link href=""><Image className="cursor-pointer" src="/images/laguarida-logo.webp" width={100} height={100} alt="logo"></Image></Link>
            <ul className="hidden lg:flex lg:text-lg">
                <Link href="#about-us"><li className="mx-8 hover:underline font-semibold">Sobre Nosotros</li></Link>
                <Link href="#foods"><li className="mx-8 hover:underline font-semibold">Comidas</li></Link>
                <Link href="#questions"><li className="mx-8 hover:underline font-semibold">Preguntas</li></Link>
            </ul>
            <button onClick={() => router.push("/form")} className="bg-white rounded-3xl p-3 mr-8 font-semibold">Ordene Ahora</button>
        </header>
    )
}

export default Header;