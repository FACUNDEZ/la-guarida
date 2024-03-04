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
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                Lunes
                            </th>
                            <td className="px-6 py-4">
                            Pastel de papa
                            </td>
                            <td className="px-6 py-4">
                            Milanesa Napolitana
                            </td>

                        </tr>
                        <tr className="bg-sky-500 border-b border-sky-400">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                Martes
                            </th>
                            <td className="px-6 py-4">
                            Canelones
                            </td>
                            <td className="px-6 py-4">
                            Pollo con verduras
                            </td>

                        </tr>
                        <tr className="bg-sky-400 border-b border-sky-500">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                Miércoles
                            </th>
                            <td className="px-6 py-4">
                            Pollo con papas fritas
                            </td>
                            <td className="px-6 py-4">
                            Pan de carne
                            </td>

                        </tr>
                        <tr className="bg-sky-500 border-b border-sky-400">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                Jueves
                            </th>
                            <td className="px-6 py-4">
                            Fideos con bolognesa
                            </td>
                            <td className="px-6 py-4">
                            Pollo Relleno
                            </td>
                        </tr>
                        <tr className="bg-sky-400 border-b border-sky-500">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                Viernes
                            </th>
                            <td className="px-6 py-4">
                            Chuletas de cerdo
                            </td>
                            <td className="px-6 py-4">
                            Guiso de lentejas
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default Menu