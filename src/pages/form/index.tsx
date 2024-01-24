import { useRef, FormEvent, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { send } from "@emailjs/browser";

function Form() {
  const router = useRouter()

  const [emailSent, setEmailSent] = useState(false)

  const nameRef = useRef(null)
  const lastnameRef = useRef(null)
  const emailRef = useRef(null)
  const numberRef = useRef(null)
  const dateRef = useRef(null)
  const quantityRef = useRef(null)

  const apiEntre = "http://localhost:3000/api/send"

  const getApiEntre = async () => {
    try {
      const response = await fetch(apiEntre, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        //@ts-ignore
        body: JSON.stringify({ name: nameRef.current?.value, lastname: lastnameRef.current?.value, number: numberRef.current?.value, date: dateRef.current?.value, quantity: quantityRef.current?.value })
      })
      const data = await response.json()
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  async function sendForm(event: FormEvent) {
    event.preventDefault()

    setEmailSent(false)

    //@ts-ignore
    if (!nameRef.current?.value || !lastnameRef.current?.value || !emailRef.current?.value || !numberRef.current?.value || !dateRef.current?.value || !quantityRef.current?.value) {
      alert("Completa los datos, por favor")
      return
    }

    //@ts-ignore
    if (quantityRef.current?.value <= 0) {
      alert("Inserta bien la cantidad")
      return
    }

    let templateParams = {
      //@ts-ignore
      to_name: nameRef.current?.value,
      //@ts-ignore
      to_lastname: lastnameRef.current?.value,
      //@ts-ignore
      to_email: emailRef.current?.value,
      //@ts-ignore
      date: dateRef.current?.value,
      //@ts-ignore
      quantity: quantityRef.current?.value,
    };

    send("service_lgejyq2", "template_qgvoseq", templateParams, "ewwgdg3MgDbAQPrRw");

    await getApiEntre()

    setEmailSent(true);

    //@ts-ignore
    nameRef.current.value = "", lastnameRef.current.value = "", emailRef.current.value = "", numberRef.current.value = "", dateRef.current.value = "", quantityRef.current.value = ""
  }

  return (
    <section className="bg-white font-primary">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="background"
            src="/images/hero-img.webp"
            priority
            width={500}
            height={500}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="flex justify-between mt-3">
              <button
                onClick={() => router.push("/")}
                className="w-25 h-10 shrink-0 mt-2 rounded-md border border-sky-400 bg-sky-400 py-2 px-5 text-md font-medium text-white transition hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
              >
                Volver al Inicio
              </button>
              <Image
                alt="background"
                src="/images/laguarida-logo.webp"
                width={100}
                height={100}
                className="-mt-5"
              />
            </div>

            {emailSent === true && (
              <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-11">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-10 w-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>

                  <strong className="block font-medium text-gray-900"> Pedido realizado correctamente </strong>
                </div>

                <button onClick={() => setEmailSent(false)} className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-600">
                  <span className="sr-only">Dismiss popup</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            <h1 className="mt-5 text-5xl font-bold text-gray-900 ">
              Haz tu pedido
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Encargue su pedido con 24 horas de anticipación de manera rápida, dinámica y flexible.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6 mb-12">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-base font-medium text-gray-700">
                  Nombre
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  ref={nameRef}
                  className="mt-1 w-full p-2 rounded-sm text-base border-gray-200 bg-white text-sky-300 shadow-sm focus:outline-none"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-base font-medium text-gray-700">
                  Apellido
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  ref={lastnameRef}
                  className="mt-1 w-full rounded-md p-2 border-gray-200 bg-white text-base text-sky-300 shadow-sm focus:outline-none"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-base font-medium text-gray-700">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  id="LastName"
                  name="last_name"
                  ref={emailRef}
                  className="mt-1 w-full rounded-md p-2 border-gray-200 bg-white text-base text-sky-300 shadow-sm focus:outline-none"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="telefono" className="block text-base font-medium text-gray-700">
                  Número de teléfono
                </label>

                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  ref={numberRef}
                  className="mt-1 w-full rounded-md p-2 border-gray-200 bg-white text-base text-sky-300 shadow-sm focus:outline-none"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="telefono" className="block text-base font-medium text-gray-700">
                  Fecha de retiro
                </label>

                <input
                  type="date"
                  id="date"
                  name="date"
                  ref={dateRef}
                  className="mt-1 w-full rounded-md p-2 border-gray-200 bg-white text-base text-sky-300 shadow-sm focus:outline-none"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="quantity" className="block text-base font-medium text-gray-700">
                  Cantidad de viandas
                </label>

                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  ref={quantityRef}
                  className="mt-1 w-full rounded-md p-2 border-gray-200 bg-white text-base text-sky-300 shadow-sm focus:outline-none"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="button"
                  onClick={sendForm}
                  className="inline-block shrink-0 rounded-md border mt-3 border-sky-400 bg-sky-400 px-12 py-3 text-base font-medium text-white transition hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
                >
                  Enviar Pedido
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}


export default Form