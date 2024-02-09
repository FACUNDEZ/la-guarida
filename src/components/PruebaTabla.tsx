import { MenuContext } from "@/context/MenuContex";
import { useContext } from "react";

export default function PruebasTabla() {
  //@ts-ignore
  const { menu } = useContext(MenuContext);

  return (
    <>
      <div className="flex text-red-700">
        <p className="mx-1">{menu.lunes.receta1}</p>
        <p className="mx-1">{menu.lunes.receta2}</p>
        <p className="mx-1">{menu.martes.receta1}</p>
        <p className="mx-1">{menu.martes.receta2}</p>
        <p className="mx-1">{menu.miercoles.receta1}</p>
        <p className="mx-1">{menu.miercoles.receta2}</p>
        <p className="mx-1">{menu.jueves.receta1}</p>
        <p className="mx-1">{menu.jueves.receta2}</p>
        <p className="mx-1">{menu.viernes.receta1}</p>
        <p className="mx-1">{menu.viernes.receta2}</p>
      </div>
    </>
  );
}
