interface InputProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    change?: (valor: any) => void
}


export default function Input(_props: InputProps) {
    return (
        <div className={`flex flex-col ${_props.className}`}>
            <label className="mb-2">
                {_props.texto}
            </label>
            <input
                type={_props.tipo ?? 'text'}
                value={_props.valor}
                readOnly={_props.somenteLeitura}
                onChange={e => _props.change?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus: outline-none bg-gray-100 px-4 py-2
                    ${_props.somenteLeitura ? '' : 'focus: bg-white'}
                `}
            />
        </div>
    )
}