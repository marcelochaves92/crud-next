import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";


interface FormProps {
    _client: Client
    clientChange?: (_client: Client) => void
    canceled?: () => void
}

export default function Form(_props: FormProps) {
    const id = _props._client?.id
    const [name, setName] = useState(_props._client?.name ?? '')
    const [age, setAge] = useState(_props._client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Input
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Input
                texto="Nome"
                valor={name}
                change={setName}
                className="mb-5"
            />
            <Input
                texto="Idade"
                tipo="number"
                valor={age}
                change={setAge}
            />
            <div className="flex mt-7 justify-end">
                <Button cor="blue" className="mr-2" onClick={() => _props.clientChange?.(new Client(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={_props.canceled}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}