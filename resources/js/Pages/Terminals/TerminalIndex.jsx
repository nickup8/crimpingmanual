import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { PencilIcon, XCircleIcon } from "@heroicons/react/24/outline";
import TextInput from "@/Components/TextInput";

export default function TerminalIndex({ auth, terminals, queryParams = null }) {
  queryParams = queryParams || {};

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("terminals.index"), queryParams, { replace: true });
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") {
      return;
    }
    searchFieldChanged(name, e.target.value);
  };
  return (
    <>
      <AuthenticatedLayout user={auth.user}>
        <Head title="Терминалы" />

        <header className="bg-white shadow">
          <div className="max-w-screen-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Терминалы
            </h2>
          </div>
        </header>
        <div className="py-12">
          <div className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-400">
                    <tr className="text-left border-collapse border-gray-300">
                      <th className="p-3 border-collapse border-r border-gray-300 text-nowrap">
                        Код контакта (YPN)
                      </th>
                      <th className="p-3 border-collapse border-r border-gray-300 text-nowrap">
                        Номер контакта (SPN)
                      </th>
                      <th className="p-3 border-collapse border-r border-gray-300 text-nowrap">
                        Поставщик
                      </th>
                      <th className="p-3 border-collapse border-r border-gray-300 text-nowrap">
                        Описание
                      </th>
                      <th className="p-3 text-right text-nowrap">Действия</th>
                    </tr>
                    <tr className="text-left border-collapse border-b border-gray-300">
                      <th className="p-3 border-collapse border-r border-gray-300 text-nowrap">
                        <TextInput
                          className="w-full"
                          name="code"
                          onBlur={(e) =>
                            searchFieldChanged("code", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("code", e)}
                          defaultValue={queryParams.code}
                        />
                      </th>
                      <th className="p-3 border-collapse border-r border-gray-300 text-nowrap"></th>
                      <th className="p-3 border-collapse border-r border-gray-300 text-nowrap"></th>
                      <th className="p-3 border-collapse border-r border-gray-300 text-nowrap"></th>
                      <th className="p-3 text-right text-nowrap"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {terminals.data.map((terminal) => (
                      <tr
                        key={terminal.id}
                        className="text-left border-collapse border-b border-gray-300 even:bg-gray-100"
                      >
                        <td className="p-3 border-collapse border-r border-gray-300 text-nowrap">
                          {terminal.code}
                        </td>
                        <td className="p-3 border-collapse border-r border-gray-300 text-nowrap">
                          {terminal.number}
                        </td>
                        <td className="p-3 border-collapse border-r border-gray-300 text-nowrap">
                          {terminal.supplier}
                        </td>
                        <td className="p-3 border-collapse border-r border-gray-300">
                          {terminal.title}
                        </td>
                        <td className="p-3 text-right">
                          <div className="flex justify-end space-x-3">
                            <Link href={route("terminals.edit", terminal.id)}>
                              <PencilIcon className="text-blue-500 hover:text-blue-700 w-5 h-5" />
                            </Link>
                            <Link
                              href={route("terminals.destroy", terminal.id)}
                              method="delete"
                              as="button"
                            >
                              <XCircleIcon className="text-red-500 hover:text-red-700 w-5 h-5" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
