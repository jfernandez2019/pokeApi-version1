import { useState, useEffect } from "react"

export const useFecht = (url) => {
    const [pokemon, setpokemon] = useState(null)
    const [errors, seterrors] = useState('')

    const getfetch = async () => {

        try {
            if (!url) return
            const response = await fetch(url)
            const data = await response.json()
            setpokemon(data)
        } catch (error) {
            seterrors('Ocurrio un error al leer la pokeapi')
        }

    }

    useEffect(() => {
        if (!url) return
        getfetch()
    }, [url])

    return {
        pokemon,
        errors
    }
}
