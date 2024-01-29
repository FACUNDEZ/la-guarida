import Image from "next/image"

function Hero() {
    return (
        <main className="font-primary">
            <section className='h-full text-center mt-44 pb-28 flex flex-col sm:mt-28 md:mt-28'>
                <div>
                    <h1 className='text-5xl mx-4 font-bold'>Una experiencia culinaria sin igual</h1>
                    <p className='text-lg mt-7 mx-4'>Bienvenidos a La Guarida, a degustar comidas de la cocina tradicional.</p>
                </div>
                <div className="mt-14 m-auto lg:m-8">
                    <Image src="/images/hero-img.webp" className="sm:w-full" alt="food" width={450} height={450}></Image>
                </div>
            </section>
        </main>
    )
}

export default Hero;