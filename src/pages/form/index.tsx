import { useRef, FormEvent, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { send } from "@emailjs/browser";

function Form() {
  const router = useRouter()

  const [emailSent, setEmailSent] = useState(false)
  const [emptyData, setEmptyData] = useState(false)
  const [quantityWrong, setQuantityWrong] = useState(false)
  const [emailWrong, setEmailWrong] = useState(false)
  const [dateWrong, setDateWrong] = useState(false)
  const [satSunWrong, setSatSunWrong] = useState(false)
  const [menuWrong, setMenuWrong] = useState(false)
  const [selected, setSelected] = useState(null);

  const nameRef = useRef<HTMLInputElement | null>(null)
  const lastnameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const numberRef = useRef<HTMLInputElement | null>(null)
  const dateRef = useRef<HTMLInputElement | null>(null)
  const quantityRef = useRef<HTMLInputElement | null>(null)

  const apiEntre = "http://localhost:3000/api/send"

  const getApiEntre = async () => {
    try {
      const response = await fetch(apiEntre, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: nameRef.current?.value, lastname: lastnameRef.current?.value, number: numberRef.current?.value, date: dateRef.current?.value, quantity: quantityRef.current?.value, menu: selected })
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

    if (!nameRef.current?.value || !lastnameRef.current?.value || !emailRef.current?.value || !numberRef.current?.value || !dateRef.current?.value || !quantityRef.current?.value || selected === null) {
      setEmptyData(true)
      return
    }

    const today = new Date()
    const day = today.getDate()
    const year = today.getFullYear()
    const month = today.getMonth()

    const dateToday = new Date(year, month, day);

    const dateValue = new Date(dateRef.current?.value)
    const dayValue = dateValue.getDate()
    const yearValue = dateValue.getFullYear()
    const monthValue = dateValue.getMonth()
    const dayOfTheWeekValue = dateValue.getDay()

    const dateComValue = new Date(yearValue, monthValue, dayValue)

    const dateValue2 = new Date(dateRef.current?.value)
    const getFullYear = dateValue2.getFullYear()

    const dayCurr = new Date();
    const otherDay = new Date(dateRef.current?.value);

    const dayVer = dayCurr.getDay()

    const daysDiff = Math.floor((otherDay.getTime() - dayCurr.getTime()) / 1000 / 60 / 60 / 24);

    if (dateToday >= dateComValue) {
      setDateWrong(true)
      return
    }

    if (dayOfTheWeekValue == 5 || dayOfTheWeekValue == 6) {
      setSatSunWrong(true)
      return
    }

    if (getFullYear > year) {
      setMenuWrong(true)
      return
    }

    if ((dayVer == 0 && daysDiff > 5) || (dayVer == 1 && daysDiff > 4) || (dayVer == 2 && daysDiff > 3) || (dayVer == 3 && daysDiff > 2) || (dayVer == 4 && daysDiff >= 1) || (dayVer == 5 && daysDiff >= 0) || (dayVer == 6 && daysDiff >= 0)) {
      setMenuWrong(true)
      return
    }

    //@ts-ignore
    if (quantityRef.current?.value <= 0) {
      setQuantityWrong(true)
      return
    }

    if (!emailRef.current?.value.includes("@")) {
      setEmailWrong(true)
      return
    }

    let templateParams = {
      to_name: nameRef.current?.value,
      to_lastname: lastnameRef.current?.value,
      to_email: emailRef.current?.value,
      date: dateRef.current?.value,
      quantity: quantityRef.current?.value,
      menu: selected,
    };

    send("service_lgejyq2", "template_qgvoseq", templateParams, "ewwgdg3MgDbAQPrRw");

    await getApiEntre()

    setEmailSent(true);

    nameRef.current.value = "", lastnameRef.current.value = "", emailRef.current.value = "", numberRef.current.value = "", dateRef.current.value = "", quantityRef.current.value = ""
  }

  const handleClick = (e: any) => setSelected(e.target.value)

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
              <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-5">
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

            {emptyData === true && (
              <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-9">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-red-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                      <path d="M9 8l6 8" />
                      <path d="M15 8l-6 8" />
                    </svg>
                  </span>
                  <strong className="block font-medium text-gray-900"> Complete todos los datos, por favor. </strong>
                </div>

                <button onClick={() => setEmptyData(false)} className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-600">
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

            {emailWrong === true && (
              <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-9">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-red-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                      <path d="M9 8l6 8" />
                      <path d="M15 8l-6 8" />
                    </svg>
                  </span>
                  <strong className="block font-medium text-gray-900"> Ingrese bien su email, por favor. </strong>
                </div>

                <button onClick={() => setEmailWrong(false)} className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-600">
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

            {quantityWrong === true && (
              <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-9">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-red-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                      <path d="M9 8l6 8" />
                      <path d="M15 8l-6 8" />
                    </svg>
                  </span>
                  <strong className="block font-medium text-gray-900"> Inserte bien la cantidad del pedido, por favor. </strong>
                </div>

                <button onClick={() => setQuantityWrong(false)} className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-600">
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

            {dateWrong === true && (
              <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-9">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-red-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                      <path d="M9 8l6 8" />
                      <path d="M15 8l-6 8" />
                    </svg>
                  </span>
                  <strong className="block font-medium text-gray-900"> Eliga bien el día, por favor. </strong>
                </div>

                <button onClick={() => setDateWrong(false)} className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-600">
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

            {satSunWrong === true && (
              <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-9">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-red-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                      <path d="M9 8l6 8" />
                      <path d="M15 8l-6 8" />
                    </svg>
                  </span>
                  <strong className="block font-medium text-gray-900"> Los sábados y domingos no se realizan pedidos. </strong>
                </div>

                <button onClick={() => setSatSunWrong(false)} className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-600">
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

            {menuWrong === true && (
              <div role="alert" className="relative rounded-xl border border-gray-100 bg-white p-4 mt-5 mb-9">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-red-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                      <path d="M9 8l6 8" />
                      <path d="M15 8l-6 8" />
                    </svg>
                  </span>
                  <strong className="block font-medium text-gray-900"> No hay un menú establecido para la fecha seleccionada. </strong>
                </div>

                <button onClick={() => setMenuWrong(false)} className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-600">
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
                <label htmlFor="email" className="block text-base font-medium text-gray-700">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  ref={emailRef}
                  className="mt-1 w-full rounded-md p-2 border-gray-200 bg-white text-base text-sky-300 shadow-sm focus:outline-none"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="tel" className="block text-base font-medium text-gray-700">
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
                <label htmlFor="date" className="block text-base font-medium text-gray-700">
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

              <div className="col-span-6 content-center">
                <h3 className="block text-base font-medium text-gray-700 mb-4">
                  Menú del día
                </h3>

                <input onClick={handleClick} className="mr-1" type="radio" id="cbox1" value="first_checkbox" name="menu" />
                <label className="mr-4 text-base" htmlFor="cbox1">Primer menu</label>

                <input onClick={handleClick} className="mr-1" type="radio" id="cbox2" value="second_checkbox" name="menu" />
                <label className="mr-4 text-base" htmlFor="cbox2">Segundo menu</label>

                <input onClick={handleClick} className="mr-1" type="radio" id="cbox3" value="ambos-menus" name="menu" />
                <label className="text-base" htmlFor="cbox3">Ambos menús</label>
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

