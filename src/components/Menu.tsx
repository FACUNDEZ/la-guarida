import { useContext } from "react"
import { MenuContext } from "@/context/MenuContex"

function Menu() {
    const { menu }: any = useContext(MenuContext)

    return (
        <section id="menu" className="font-primary h-full flex flex-col -mt-4 lg:-mt-10  lg:mx-32">
            <h2 className="text-5xl lg:text-6xl text-center font-bold mb-12">Menú semanal</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-16">
                <table className="w-full text-lg lg:text-xl text-left rtl:text-right">
                    <thead className="uppercase bg-sky-400 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Día de la semana
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Primer Menú
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Segundo Menú
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-sky-400 border-b border-sky-500">
                            <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                                Lunes
                            </th>
                            <td className="px-6 py-4">
                            Pollo al verdeo con papas al horno
                            </td>
                            <td className="px-6 py-4">
                            Tallarines caseros al huevo o verdes (a elección), con salsa bolognesa
                            </td>

                        </tr>
                        <tr className="bg-sky-500 border-b border-sky-400">
                            <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                                Martes
                            </th>
                            <td className="px-6 py-4">
                            Pastel de papas
                            </td>
                            <td className="px-6 py-4">
                            Zapallitos rellenos (arroz y carne picada), con ensalada de lentejas y huevo
                            </td>

                        </tr>
                        <tr className="bg-sky-400 border-b border-sky-500">
                            <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                                Miércoles
                            </th>
                            <td className="px-6 py-4">
                            Guiso de lentejas
                            </td>
                            <td className="px-6 py-4">
                            Wok de verduras y pollo, acompañado de arroz
                            </td>

                        </tr>
                        <tr className="bg-sky-500 border-b border-sky-400">
                            <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                                Jueves
                            </th>
                            <td className="px-6 py-4">
                            Milanesas de cerdo a la napolitana con porción de tortilla
                            </td>
                            <td className="px-6 py-4">
                            Sorrentinos de jamón y queso
                            </td>
                        </tr>
                        <tr className="bg-sky-400 border-b border-sky-500">
                            <th scope="row" className="px-6 py-4 whitespace-nowrap font-bold">
                                Viernes
                            </th>
                            <td className="px-6 py-4">
                            Albóndigas con arroz o puré (a elección)
                            </td>
                            <td className="px-6 py-4">
                            Pollo al horno con puré mixto
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default Menu