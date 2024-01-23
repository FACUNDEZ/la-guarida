import Image from "next/image"
import Carousel from "./Carousel"

function AboutUs() {
    return (
        <section className="h-full flex flex-col font-primary">
            <div className="lg:flex lg:justify-between">
                <h2 className="text-5xl font-bold mx-4 sm:text-center lg:px-4">Excelente servicio de comida</h2>
                <p className="text-lg mt-7 mx-4 sm:text-center">Hemos estado sirviendo comida de la mejor calidad, con nuestros mejores ingredientes, nuestro nombre garantiza sabor y calidad.</p>
            </div>
            <div className="mx-16">
                <div className="bg-black p-4 mt-10">
                    <div className="mt-14 m-auto sm:mt-5">
                        <Image src="/images/hero-img.webp" className="sm:w-full" alt="food" width={450} height={450}></Image>
                    </div>
                    <div className="text-white mt-14 pb-7">
                        <h2 className="text-5xl font-bold mx-4 sm:">Preparadas con dedicación y listas para su entrega</h2>
                        <p className="text-lg mt-7 mx-4">Los pedidos se tienen que pedir con 24hs de anticipación.</p>
                        <button className="flex text-lg mt-7 mx-4 gap-1">Haz tu pedido <svg width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M13 18l6 -6" />
                            <path d="M13 6l6 6" />
                        </svg></button>
                    </div>
                </div>
            </div>

            <Carousel />

            <div className="pb-16 mt-20 m-auto">
                <h2 className="text-4xl font-bold mx-4 text-center">¿Te preocupa que la vianda no sea tu agrado?</h2>
                <p className="text-lg mt-10 mx-4">No te preocupes, nuestro servicio te ofrecerá una comida deliciosa y de calidad, con los gustos más tradicionales de la cocina.</p>

                <div className="lg:flex lg:w-full">
                    <Image className="mt-14 m-auto sm:mt-10 sm:w-full sm:px-4 lg:w-96 lg:h-96 lg:m-0 lg:px-0 lg:mt-8 lg:mr-4" src="/images/hero-img.webp" width={450} height={450} alt="food"></Image>
                    <Image className="hidden mt-14 m-auto sm:mt-10 sm:w-full sm:px-4 lg:block lg:w-96 lg:h-96 lg:m-0 lg:px-0 lg:mt-8 lg:mr-4" src="/images/hero-img.webp" width={450} height={450} alt="food"></Image>
                    <Image className="hidden mt-14 m-auto sm:mt-10 sm:w-full sm:px-4 lg:w-96 lg:block lg:h-96 lg:m-0 lg:px-0 lg:mt-8" src="/images/hero-img.webp" width={450} height={450} alt="food"></Image>
                </div>

                <h2 className="text-4xl font-bold mt-16 mx-4 text-center">¿Tienes más preguntas sobre nuestro servicio?</h2>
                <p className="text-xl mt-10 mx-4 text-center">Aquí abajo está la respuesta a tu pregunta.</p>
                <span>
                    <svg className="m-auto mt-16 animate-bounce" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M18 13l-6 6" />
                        <path d="M6 13l6 6" />
                    </svg>
                </span>
            </div>
        </section>
    )
}

export default AboutUs