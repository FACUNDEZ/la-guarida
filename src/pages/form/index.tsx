import { useRef, FormEvent, useState } from "react"
import { AlertCorrect, ErrorAlert } from "@/components/alerts/AlertsForm";
import Image from "next/image"
import { useRouter } from "next/router"
import { send } from "@emailjs/browser";
import Footer from '@/components/Footer'

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
  const [totalPrice, setTotalPrice] = useState(0)

  const nameRef = useRef<HTMLInputElement | null>(null)
  const lastnameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const numberRef = useRef<HTMLInputElement | null>(null)
  const dateRef = useRef<HTMLInputElement | null>(null)
  const quantityRef = useRef<HTMLInputElement | null>(null)

  const apiEntre = "https://la-guarida.vercel.app/api/send"

  const getApiEntre = async () => {
    try {
      const response = await fetch(apiEntre, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: nameRef.current?.value, lastname: lastnameRef.current?.value, number: numberRef.current?.value, date: dateRef.current?.value, quantity: quantityRef.current?.value, price: totalPrice, menu: selected })
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


    if (dateToday > dateComValue) {
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

    if ((dayVer == 0 && daysDiff > 5) || (dayVer == 1 && daysDiff > 4) || (dayVer == 2 && daysDiff > 3) || (dayVer == 3 && daysDiff > 2) || (dayVer == 4 && daysDiff > 1) || (dayVer == 5 && daysDiff >= 0) || (dayVer == 6 && daysDiff >= 0)) {
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
      price: totalPrice
    };

    send("service_lgejyq2", "template_qgvoseq", templateParams, "ewwgdg3MgDbAQPrRw");

    await getApiEntre()

    setEmailSent(true);

    nameRef.current.value = "", lastnameRef.current.value = "", emailRef.current.value = "", numberRef.current.value = "", dateRef.current.value = "", quantityRef.current.value = "", setTotalPrice(0)
  }

  const handleClick = (e: any) => setSelected(e.target.value)

  const handleQuantityChange = () => {
    const quantity = parseInt(quantityRef.current?.value || "0", 10);

    if (!isNaN(quantity)) setTotalPrice(getPriceForQuantity(quantity));
  }

  const getPriceForQuantity = (quantity: number) => {
    return 2500 * quantity;
  }

  return (
    <>
      <section className="bg-white font-primary">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              alt="background"
              src="/images/image-form.webp"
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
                  alt="logo"
                  src="/images/laguarida-logo.webp"
                  width={100}
                  height={100}
                  className="-mt-5"
                />
              </div>

              {emailSent === true && (<AlertCorrect state={false} setState={setEmailSent} />)}

              {emptyData === true && (<ErrorAlert title="Complete todos los datos, por favor." state={false} setState={setEmptyData} />)}

              {emailWrong === true && (<ErrorAlert title="Ingrese bien su email, por favor." state={false} setState={setEmailWrong} />)}

              {quantityWrong === true && (<ErrorAlert title="Inserte bien la cantidad del pedido, por favor." state={false} setState={setQuantityWrong} /> )}

              {dateWrong === true && (<ErrorAlert title="Eliga bien el día, por favor." state={false} setState={setDateWrong} />)}

              {satSunWrong === true && (<ErrorAlert title="Los sábados y domingos no se realizan pedidos." state={false} setState={setSatSunWrong} />)}

              {menuWrong === true && (<ErrorAlert title="No hay un menú establecido para la fecha seleccionada." state={false} setState={setMenuWrong} />)}

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
                    min={0}
                    ref={quantityRef}
                    onChange={handleQuantityChange}
                    className="mt-1 w-full rounded-md p-2 border-gray-200 bg-white text-base text-sky-300 shadow-sm focus:outline-none"
                  />
                </div>

                <div className="col-span-6 content-center">
                  <h3 className="block text-base font-medium text-gray-700 mb-4">
                    Precio de las viandas: ${totalPrice}
                  </h3>
                </div>
                <div className="col-span-6 content-center">
                  <h3 className="block text-base font-medium text-gray-700 mb-4">
                    Menú del día
                  </h3>

                  <input onClick={handleClick} className="mr-1" type="radio" id="cbox1" value="primer menu" name="menu" />
                  <label className="mr-4 text-base" htmlFor="cbox1">Primer menu</label>

                  <input onClick={handleClick} className="mr-1" type="radio" id="cbox2" value="segundo menu" name="menu" />
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
      <Footer />
    </>
  )
}

export default Form

