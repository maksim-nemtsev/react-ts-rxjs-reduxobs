import React from 'react'
import { useObservableState } from 'observable-hooks';
import { deck$ } from '../store';

export const Deck = () => {
    const deck = useObservableState(deck$, [])
      return(
    <div>
      <h4>
        Deck
      </h4>
      {
        deck.map((pokemon) => (
          <div key={pokemon.id} style={{display: "flex", alignItems: "center"}}>
            <div>
              <strong>
              {
                pokemon.name
              }
            </strong>
            </div>
            
            <div>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="img" />
            </div>
          </div>
        ))
      }
    </div>
      )
    }