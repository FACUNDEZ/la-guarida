
function Menu() {
    return (
        <>
            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-sky-500 dark:text-white">
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
            <tr className="bg-sky-500 border-b border-sky-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Lunes
                </th>
                <td className="px-6 py-4">
                    Milanesas
                </td>
                <td className="px-6 py-4">
                    Canelones
                </td>
                
            </tr>
            <tr className="bg-sky-400 border-b border-sky-500">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Martes
                </th>
                <td className="px-6 py-4">
                    Pollo relleno
                </td>
                <td className="px-6 py-4">
                    Pastel de papa
                </td>
                
            </tr>
            <tr className="bg-sky-500 border-b border-sky-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Miércoles
                </th>
                <td className="px-6 py-4">
                    Fideos
                </td>
                <td className="px-6 py-4">
                    Chuletas de cerdo
                </td>
               
            </tr>
            <tr className="bg-sky-400 border-b border-sky-500">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Jueves
                </th>
                <td className="px-6 py-4">
                    Pollo con papas fritas
                </td>
                <td className="px-6 py-4">
                    Milanesas Napolitanas
                </td>
            </tr>
            <tr className="bg-sky-500 border-b border-sky-400">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Viernes
                </th>
                <td className="px-6 py-4">
                    Pan de carne
                </td>
                <td className="px-6 py-4">
                    Sorrentinos
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

        </>
    )
}

export default Menu