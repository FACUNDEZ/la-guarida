import { createContext, useState } from "react";

let diasDeLaSemana = {
    lunes: {
        receta1: "",
        receta2: ""
    },
    martes:{
        receta1: "",
        receta2: ""
    },
    miercoles:{
        receta1: "",
        receta2: ""
    },
    jueves: {
        receta1: "",
        receta2: ""
    },
    viernes: {
        receta1: "",
        receta2: ""
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