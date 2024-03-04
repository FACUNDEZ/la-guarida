import React, { useContext, useRef, FormEvent } from "react";
import { useRouter } from "next/router";
import { MenuContext } from "@/context/MenuContex";

export default function FormularioMenuDelDia() {
    const router = useRouter()

    const lunesMenu1 = useRef(null);
    const lunesMenu2 = useRef(null);
    const martesMenu1 = useRef(null);
    const martesMenu2 = useRef(null);
    const miercolesMenu1 = useRef(null);
    const miercolesMenu2 = useRef(null);
    const juevesMenu1 = useRef(null);
    const juevesMenu2 = useRef(null);
    const viernesMenu1 = useRef(null);
    const viernesMenu2 = useRef(null);
    //@ts-ignore
    const { menu, setMenu } = useContext(MenuContext);

    const handleMenuSubmit = (e: FormEvent) => {
        e.preventDefault();

        setMenu({
            lunes: {
                //@ts-ignore
                receta1: lunesMenu1.current?.value,
                //@ts-ignore
                receta2: lunesMenu2.current?.value,
            },
            martes: {
                //@ts-ignore
                receta1: martesMenu1.current?.value,
                //@ts-ignore
                receta2: martesMenu2.current?.value,
            },
            miercoles: {
                //@ts-ignore
                receta1: miercolesMenu1.current?.value,
                //@ts-ignore
                receta2: miercolesMenu2.current?.value,
            },
            jueves: {
                //@ts-ignore
                receta1: juevesMenu1.current?.value,
                //@ts-ignore
                receta2: juevesMenu2.current?.value,
            },
            viernes: {
                //@ts-ignore
                receta1: viernesMenu1.current?.value,
                //@ts-ignore
                receta2: viernesMenu2.current?.value,
            },
        })
        //@ts-ignore
        lunesMenu1.current.value = "", lunesMenu2.current.value = "", martesMenu1.current.value = "", martesMenu2.current.value = "", miercolesMenu1.current.value = "", miercolesMenu2.current.value = "", juevesMenu1.current.value = "", juevesMenu2.current.value = "", viernesMenu1.current.value = "", viernesMenu2.current.value = ""
    };

    return (
        <>
        <button onClick={() => router.push("/")}>
            Volver al inicio
        </button>
        <section className="h-screen w-screen flex flex-col justify-center items-center">
            <h2>Menu de la semana</h2>

            <form className="flex flex-col" onSubmit={handleMenuSubmit}>
                <span>Lunes</span>
                <span>Receta 1</span>
                <input
                    type="text"
                    ref={lunesMenu1}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <span>Receta 2</span>
                <input
                    type="text"
                    ref={lunesMenu2}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <span>Martes</span>
                <span>Receta 1</span>
                <input
                    type="text"
                    ref={martesMenu1}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <span>Receta 2</span>
                <input
                    type="text"
                    ref={martesMenu2}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <span>Miercoles</span>
                <span>Receta 1</span>
                <input
                    type="text"
                    ref={miercolesMenu1}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <span>Receta 2</span>
                <input
                    type="text"
                    ref={miercolesMenu2}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <span>Juevez</span>
                <span>Receta 1</span>
                <input
                    type="text"
                    ref={juevesMenu1}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <span>Receta 2</span>
                <input
                    type="text"
                    ref={juevesMenu2}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <span>Viernes</span>
                <span>Receta 1</span>
                <input
                    type="text"
                    ref={viernesMenu1}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <span>Receta 2</span>
                <input
                    type="text"
                    ref={viernesMenu2}
                    className="border border-solid border-black rounded-lg pl-1"
                />
                <button
                    className="bg-sky-400 text-white font-bold rounded-3xl p-3 mr-8"
                    type="submit"
                >
                    Subir menu
                </button>
            </form>
        </section>
        </>
    );
}