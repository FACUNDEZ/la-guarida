import { createContext, useState } from "react";

let diasDeLaSemana = {
    lunes: {
        receta1: "Pizza",
        receta2: "Chorizo"
    },
    martes:{
        receta1: "Pollo",
        receta2: "Pescado"
    },
    miercoles:{
        receta1: "Sushi",
        receta2: "Arepa"
    },
    jueves: {
        receta1: "Huevos",
        receta2: "Papas fritas"
    },
    viernes: {
        receta1: "Hola",
        receta2: "Puto el que lo lea"
    }
}

export const MenuContext = createContext(diasDeLaSemana);

export function MenuProvider({ children } : { children: React.ReactNode }){
    const [menu, setMenu] = useState(diasDeLaSemana)

    return(
        //@ts-ignore
        <MenuContext.Provider value={{ menu, setMenu }}>
            {children}
        </MenuContext.Provider>
    )
}