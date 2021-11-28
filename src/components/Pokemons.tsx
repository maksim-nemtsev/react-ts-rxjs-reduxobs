import React from 'react'
import { Deck } from './Pokemons/Deck/Deck'
import { SearchingPokemons } from './Pokemons/SearchingPokemons/SearchingPokemons';

const Pokemons = () => {
    return (
        <div>
            <Deck/>
            <SearchingPokemons/>
        </div>
    )
}

export default Pokemons
