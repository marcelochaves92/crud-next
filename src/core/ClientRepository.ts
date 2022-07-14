import Client from "./Client";

export default interface ClientRepository {
    save(_client: Client): Promise<Client>
    delete(_client: Client): Promise<void>
    getAll(): Promise<Client[]>
}