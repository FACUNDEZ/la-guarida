import { createContext, useState } from "react";

let diasDeLaSemana = {
    lunes: {
        receta1: "Pene",
        receta2: "Pinga"
    },
    martes:{
        receta1: "Choto",
        receta2: "Pija"
    },
    miercoles:{
        receta1: "Pito",
        receta2: "Nabo"
    },
    juevez: {
        receta1: "Poronga",
        receta2: "Japi"
    },
    viernes: {
        receta1: "Nepe",
        receta2: "Polla"
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