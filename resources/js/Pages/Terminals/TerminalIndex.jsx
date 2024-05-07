import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function TerminalIndex({auth}) {
    return(
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Терминалы</h2>}
            >
                <Head title="Терминалы" />
                <div className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-gray-400">
                                <tr className="text-left border-collapse border-b border-gray-300">
                                    <th className="p-3 border-collapse border-r border-gray-300">Код контакта (YPN)</th>
                                    <th className="p-3 border-collapse border-r border-gray-300">Номер контакта (SPN)</th>
                                    <th className="p-3 border-collapse border-r border-gray-300">Поставщик</th>
                                    <th className="p-3 border-collapse border-r border-gray-300">Описание</th>
                                    <th className="p-3 text-right">Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                                <tr className="text-left border-collapse border-b border-gray-300 even:bg-gray-100">
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 border-collapse border-r border-gray-300">123456</td>
                                    <td className="p-3 text-right">123456</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}
