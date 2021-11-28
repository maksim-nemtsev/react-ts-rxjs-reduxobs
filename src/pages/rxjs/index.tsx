import React from 'react'
import Pokemons from '../../components/Pokemons';
import { PokemonContainer, StyledHeader } from './styled-rxjs';

const RxJs = () => {
    return (
        <PokemonContainer>
        <StyledHeader>
       RxJs
        </StyledHeader>
        <Pokemons/>
        </PokemonContainer>
    )
}

export default RxJs