import React, { useContext, useRef, FormEvent } from "react";
import { MenuContext } from "@/context/MenuContex";

export default function FormularioMenuDelDia() {
  const lunesMenu1 = useRef<HTMLInputElement>(null);
  const lunesMenu2 = useRef<HTMLInputElement>(null);
  const martesMenu = useRef<HTMLInputElement>(null);
  const miercolesMenu = useRef<HTMLInputElement>(null);
  const juevezMenu = useRef<HTMLInputElement>(null);
  const viernesMenu = useRef<HTMLInputElement>(null);
  //@ts-ignore
  const { menu, setMenu } = useContext(MenuContext);

  const handleMenuSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (lunesMenu1.current) {
      setMenu((prevMenu: any) => ({
        ...prevMenu,
        lunes:{
        //@ts-ignore
        receta1: lunesMenu1.current.value,
        //@ts-ignore
        receta2: lunesMenu2.current.value,
        },
        //@ts-ignore
        martes: martesMenu.current.value,
        //@ts-ignore
        miercoles: miercolesMenu.current.value,
        //@ts-ignore
        juevez: juevezMenu.current.value,
        //@ts-ignore
        viernes: viernesMenu.current.value,
      }));
    }
  };

  return (
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
        <input
          type="text"
          ref={martesMenu}
          className="border border-solid border-black rounded-lg pl-1"
        />
        <span>Miercoles</span>
        <input
          type="text"
          ref={miercolesMenu}
          className="border border-solid border-black rounded-lg pl-1"
        />
        <span>Juevez</span>
        <input
          type="text"
          ref={juevezMenu}
          className="border border-solid border-black rounded-lg pl-1"
        />
        <span>Viernes</span>
        <input
          type="text"
          ref={viernesMenu}
          className="border border-solid border-black rounded-lg pl-1"
        />
        <button
          className="bg-sky-400 text-white font-bold rounded-3xl p-3 mr-8"
          type="submit"
        >
          Subir menu
        </button>
      </form>

      <p>{menu.lunes.receta1}</p>
      <p>{menu.lunes.receta2}</p>
      {/* <p>{menu.martes}</p>
      <p>{menu.miercoles}</p>
      <p>{menu.juevez}</p>
      <p>{menu.viernes}</p> */}
    </section>
  );
}
