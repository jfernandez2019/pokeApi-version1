import React from 'react'
import { useState, useEffect } from 'react'
import '../Style/PokeStilo2.css'

export const Pokedex = () => {
    const [nombrePokemon, setnombrePokemon] = useState('')
    const [pokemonList, setpokemonList] = useState([])
    const [selectPokemon, setselectPokemon] = useState(null)
    const [pokemonData, setpokemonData] = useState(null)
    const [offset, setOffset] = useState(0);
    const [error, seterror] = useState(null)
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}/`
    //let nroLista = 20
    //const url2 = `https://pokeapi.co/api/v2/pokemon?limit=${nroLista}/`
    /*const getfetch = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setpokemonData(data)
        } catch (error) {
            seterror('Ocurrio un error al leer la pokeapi')
        }

    }*/

    /*const handleNombrePokemon = (e) => {
        setnombrePokemon(e.target.value)
    }*/

    const handleSubmmit = (e) => {
        e.preventDefault()
        //getfetch()
        //console.log(pokemonData)
    }

    const handlePokemonClick = (pokemon) => {
        fetch(pokemon.url)
            .then(response3 => response3.json())
            .then(data3 => setselectPokemon(data3));

    };


    const handleNextClick = () => {
        setOffset(offset + 20);
    };

    const handlePrevClick = () => {
        if (offset >= 20) {
            setOffset(offset - 20);
        }
    };


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`) // Obtener los primeros 20 Pokémon
            .then(response => response.json())
            .then(data => setpokemonList(data.results))
    }, [offset])

    return (
        <form onSubmit={handleSubmmit}>
            <div className='PokedexForm'>
                <div className='container-imagen'>
                    <img
                        className='titulo'
                        alt='titulo de la pantalla'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png'>
                    </img>
                </div>
                <div className='botones'>
                    <button className='btn btn-primary' onClick={handlePrevClick}>Atras</button>
                    <button className='btn btn-primary' onClick={handleNextClick}>Adelante</button>
                </div>
                <div className='pokemones'>
                    {pokemonData && (
                        <>
                            <h4>Nombre:{pokemonData.name}</h4>
                            <img src={pokemonData.sprites.other.home.front_default}></img>
                        </>
                    )
                    }
                </div>
                <div className='info-poke'>
                    <div className='pokemon-list'>
                        {pokemonList.map((pokemon) => (
                            <>
                                <div key={pokemon.name}
                                    onClick={() => handlePokemonClick(pokemon)} data-type={pokemon.type}>
                                    {pokemon.name}
                                </div>
                            </>
                        ))}
                    </div>

                    <div className="pokemon-details">
                        {selectPokemon && (
                            <div>
                                <h2>{selectPokemon.name}</h2>
                                <img src={selectPokemon.sprites.front_default} alt={selectPokemon.name} />
                                <h3>Abilities:</h3>
                                <ul>
                                    {selectPokemon.abilities.map(ability => (
                                        <li key={ability.ability.name}>{ability.ability.name}</li>
                                    ))}
                                </ul>
                                <h3>Types:</h3>
                                <ul>
                                    {selectPokemon.types.map(type => (
                                        <li key={type.type.name}>{type.type.name}</li>
                                    ))}
                                </ul>
                            </div>)}
                    </div>
                </div>
            </div>
        </form>
    )
}

