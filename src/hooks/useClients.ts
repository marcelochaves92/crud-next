import Client from "../core/Client"
import { useState, useEffect } from "react"
import ColectionClient from "../backend/db/ColectionClient"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"


export default function useClients() {
    const repo: ClientRepository = new ColectionClient()

    const { tableVisible, exibirTable, exibirForm } = useTableOrForm()
    const [_client, setClient] = useState<Client>(Client.vazio())
    const [clients, setClients] = useState<Client[]>([])


    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then((clients) => {
            setClients(clients)
            exibirTable()
        })
    }

    function clientSelected(_client: Client) {
        setClient(_client)
        exibirForm()
    }

    async function clientDeleted(_client: Client) {
        await repo.delete(_client)
        getAll()
    }

    function newClient(_client: Client) {
        setClient(Client.vazio)
        exibirForm()
    }

    async function saveClient(_client: Client) {
        await repo.save(_client)
        getAll()
    }

    return {
        tableVisible,
        exibirTable,
        _client,
        clients,
        newClient,
        saveClient,
        clientDeleted,
        clientSelected,
        getAll
    }
}