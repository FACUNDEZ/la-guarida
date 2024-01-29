import { MenuContext } from "@/context/MenuContex"
import { useContext } from "react"

export default function TablaDeMenuDelDia(){
    const { menu } : any = useContext(MenuContext)
    return(
        <p>
            {
                menu.lunes
            }
        </p>
    )
}