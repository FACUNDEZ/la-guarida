import Image from "next/image"
import Carousel from "./Carousel"

function AboutUs() {
    return (
        <section className="h-full flex flex-col font-primary">
            <h2 className="text-5xl font-bold mx-4">Excelente servicio de comida</h2>
            <p className="text-lg mt-7 mx-4">Hemos estado sirviendo comida de la mejor calidad, con nuestros mejores ingredientes, nuestro nombre garantiza sabor y calidad.</p>
            <div className="bg-black p-4 mt-10">
                <div className="mt-14 m-auto">
                    <Image src="/images/hero-img.webp" alt="food" width={450} height={450}></Image>
                </div>
                <div className="text-white mt-14 pb-7">
                    <h2 className="text-5xl font-bold mx-4">Preparadas con dedicación y listas para su entrega</h2>
                    <p className="text-lg mt-7 mx-4">Los pedidos se tienen que pedir con 24hs de anticipación.</p>
                    <button className="flex text-lg mt-7 mx-4 gap-1">Haz tu pedido <svg width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                    </svg></button>
                </div>
            </div>

            <Carousel />

            <div className="pb-24 mt-20 m-auto">
                <h2 className="text-4xl font-bold mx-4 text-center">¿Te preocupa que la vianda no sea tu agrado?</h2>
                <p className="text-lg mt-10 mx-4">No te preocupes, nuestro servicio te ofrecerá una comida deliciosa y de calidad, con los gustos más tradicionales de la cocina.</p>

                <Image className="mt-14 m-auto" src="/images/hero-img.webp" width={450} height={450} alt="food"></Image>

                <h2 className="text-4xl font-bold mt-14 mx-4 text-center">¿Tienes más preguntas sobre nuestro servicio?</h2>
                <p className="text-xl mt-10 mx-4 text-center">Aquí abajo está la respuesta a tu pregunta.</p>
            </div>

        </section>
    )
}

export default AboutUs