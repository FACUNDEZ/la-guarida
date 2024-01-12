import Image from "next/image"
import Link from "next/link"

function Header() {
    return (
        <header className="w-screen h-20 fixed top-0 left-0 bg-sky-400 flex justify-between items-center z-50 overflow-hidden font-primary">
            <Link href=""><Image className="cursor-pointer" src="/images/laguarida-logo.webp" width={100} height={100} alt="logo"></Image></Link>
            <button className="bg-white rounded-3xl p-3 mr-8">Ordene Ahora</button>
        </header>
    )
}

export default Header