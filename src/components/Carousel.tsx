import Image from "next/image"
import { useState } from "react";

function Carousel() {
    const [index, setIndex] = useState(0)

    const handlePrevClick = () => {
        setIndex((prevIndex: number) => (prevIndex === 0 ? 4 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setIndex((prevIndex: number) => (prevIndex === 4 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <h1 id="foods" className="text-5xl lg:text-6xl mx-4 font-bold mt-20 lg:mt-24 text-center">Viandas de Bodegón</h1>

            <div id="default-carousel" className="relative mt-10" data-carousel="static">
                <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    <div
                        onLoad={() => setIndex(0)}
                        className={`duration-700 ease-in-out  ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item
                    >
                        <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                        <Image src="/images/image-carr1.webp" width={500} height={500} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover" alt="..." />
                    </div>
                    <div
                        onLoad={() => setIndex(1)}
                        className={` duration-700 ease-in-out ${index === 1 ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item
                    >
                        <Image src="/images/image-carr2.webp" width={500} height={500} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover" alt="..." />
                    </div>
                    <div
                        onLoad={() => setIndex(2)}
                        className={` duration-700 ease-in-out ${index === 2 ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item
                    >
                        <Image src="/images/image-carr3.webp" width={500} height={500} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover" alt="..." />
                    </div>
                    <div
                        onLoad={() => setIndex(3)}
                        className={` duration-700 ease-in-out ${index === 3 ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item
                    >
                        <Image src="/images/image-carr4.webp" width={500} height={500} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover" alt="..." />
                    </div>
                    <div
                        onLoad={() => setIndex(4)}
                        className={` duration-700 ease-in-out ${index === 4 ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item
                    >
                        <Image src="/images/image-carr5.webp" width={500} height={500} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover" alt="..." />
                    </div>
                </div>
                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-current={index === 0}
                        aria-label="Slide 1"
                        data-carousel-slide-to="0"
                        onClick={() => setIndex(0)}
                    ></button>
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-current={index === 1}
                        aria-label="Slide 2"
                        data-carousel-slide-to="1"
                        onClick={() => setIndex(1)}
                    ></button>
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-current={index === 2}
                        aria-label="Slide 3"
                        data-carousel-slide-to="2"
                        onClick={() => setIndex(2)}
                    ></button>
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === 3 ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-current={index === 3}
                        aria-label="Slide 4"
                        data-carousel-slide-to="3"
                        onClick={() => setIndex(3)}
                    ></button>
                    <button
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === 4 ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-current={index === 4}
                        aria-label="Slide 5"
                        data-carousel-slide-to="4"
                        onClick={() => setIndex(4)}
                    ></button>
                </div>
                <button
                    type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={handlePrevClick}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={handleNextClick}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>
        </>
    )
}

export default Carousel;

