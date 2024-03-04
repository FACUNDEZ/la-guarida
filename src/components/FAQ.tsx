import React from 'react'

function FAQ() {

    return (
        <section id='questions' className='font-primary bg-sky-400 pt-16 pb-6 h-full md:px-16'>
            <h2 className='text-5xl lg:text-6xl text-center font-bold mx-4'>Las preguntas más recurrentes</h2>
            <div className="-space-y-4 mt-8  lg:mx-32">
                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg lg:text-xl font-medium text-gray-900">
                            ¿Hacen envíos a domicilio?
                        </h2>

                        <span className="shrink-0 rounded-full bg-black p-1.5 text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 lg:text-xl leading-relaxed text-gray-700">
                        No, por el momento no hacemos envíos a domicilio.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900 lg:text-xl">
                            ¿Hay un límite de pedido de cantidad de viandas?
                        </h2>

                        <span className="shrink-0 rounded-full bg-black p-1.5 text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 lg:text-xl">
                        No, se puede solicitar la cantidad de viandas que sea necesaria.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900 lg:text-xl">
                            ¿Cuáles son sus métodos de pago?
                        </h2>

                        <span className="shrink-0 rounded-full bg-black p-1.5 text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 lg:text-xl">
                        Los métodos de pago son virtuales, a través de las aplicaciones Cuenta DNI y Mercado Pago. Los datos serán enviados una vez que realice un pedido.
                    </p>
                </details>

                

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900 lg:text-xl">
                            ¿Cuál es el precio por cada vianda?
                        </h2>

                        <span className="shrink-0 rounded-full bg-black p-1.5 text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 lg:text-xl">
                        Cada vianda tiene un precio de $2500.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900 mr-6 lg:text-xl">
                            ¿Realizan comidas veganas, apto celíacos o comidas vegetariana?
                        </h2>

                        <span className="shrink-0 rounded-full bg-black p-1.5 text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 lg:text-xl">
                        Nuestros productos poseen carnes y, derivados vegetales y animales.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900 lg:text-xl">
                            ¿Dónde se encuentran?
                        </h2>

                        <span className="shrink-0 rounded-full bg-black p-1.5 text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 lg:text-xl ">
                        Nos localizamos en la zona sur de la ciudad de Mar del Plata.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900 mr-3 lg:text-xl">
                            ¿Con cuánto tiempo de anticipación hay que hacer los pedidos?
                        </h2>

                        <span className="shrink-0 rounded-full bg-black p-1.5 text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 lg:text-xl">
                        Todos los pedidos tienen un tiempo mínimo de 24 horas.
                    </p>
                </details>
            </div>
        </section>
    )
}

export default FAQ;