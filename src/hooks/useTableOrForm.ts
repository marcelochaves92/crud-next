import { useState } from 'react';


export default function useTableOrForm() {
    const [visivel, setVisivel] = useState<'table' | 'form'>('table')

    const exibirTable = () => setVisivel('table')
    const exibirForm = () => setVisivel('form')


    return {
        formVisible: visivel === 'form',
        tableVisible: visivel === 'table',
        exibirForm,
        exibirTable,
    }
}