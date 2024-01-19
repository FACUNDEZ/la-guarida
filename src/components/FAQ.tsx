import React from 'react'

function FAQ() {
    return (
        <section className='font-primary bg-sky-400 pt-16 pb-6 h-full'>
            <h2 className='text-5xl font-bold mx-4'>Las preguntas más recurrentes</h2>
            <div className="-space-y-4 mt-5">
                <details
                    className="group p-6"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
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
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        No, por el momento no hacemos envíos a domicilio.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900">
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
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        No, se puede solicitar la cantidad de viandas que sea necesaria.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900">
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
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Cada vianda tiene un precio de $2000.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900 mr-6">
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
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Nuestros productos poseen carnes y, derivados vegetales y animales.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900">
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
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Nos localizamos en la ciudad de Mar del Plata, dirección Sicilia 3186, zona sur.
                    </p>
                </details>

                <details
                    className="group p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between ">
                        <h2 className="text-lg font-medium text-gray-900 mr-3">
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
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Todos los pedidos tienen un tiempo mínimo de 24 horas.
                    </p>
                </details>
            </div>
        </section>
    )
}

export default FAQ