import Client from "../core/Client"
import { IconDelete, IconEdit } from "./Icons"

interface TableProps {
    clients: Client[]
    clientSelected?: (_client: Client) => void
    clientDeleted?: (_client: Client) => void
}

export default function Table(_props: TableProps) {

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="p-4">Ações</th>
            </tr>
        )
    }

    function renderData() {
        return _props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {renderActions(client)}
                </tr>
            )
        })
    }

    function renderActions(_client: Client) {
        return (
            <td className="flex">
                <button className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                    {IconEdit}
                </button>
                <button className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                    {IconDelete}
                </button>
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}