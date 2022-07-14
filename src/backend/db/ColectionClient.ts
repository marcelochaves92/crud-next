import firebase from "../config"
import ClientRepository from "../../core/ClientRepository";
import Client from "../../core/Client";

export default class ColectionClient implements ClientRepository {

    #conversor = {
        toFirestore(_client: Client) {
            return {
                name: _client.name,
                age: _client.age,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
            const dados = snapshot?.data(options)
            return new Client(dados.name, dados.age, snapshot.id)
        }
    }

    async save(_client: Client): Promise<Client> {
        if (_client?.id) {
            await this.#colecao().doc(_client.id).set(_client)
            return _client
        } else {
            const docRef = await this.#colecao().add(_client)
            const doc = await docRef.get()
            return doc.data()
        }
    }
    async delete(_client: Client): Promise<void> {
        return this.#colecao().doc(_client.id).delete()
    }
    async getAll(): Promise<Client[]> {
        const query = await this.#colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    #colecao() {
        return firebase.firestore().collection('clients').withConverter(this.#conversor)
    }
}