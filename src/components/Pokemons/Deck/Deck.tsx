import React from "react";
import { useObservableState } from "observable-hooks";
import { deck$ } from "../../../store";
import { DeckContainer, DeckContent } from "./styled-deck";

export const Deck = () => {
  const deck = useObservableState(deck$, []);
  return (
    <DeckContainer>
      <h4 className="deck">Deck</h4>
      <DeckContent>
        {deck.map((pokemon) => (
          <div key={pokemon.id}>
            <div>
              <strong>{pokemon.name}</strong>
            </div>

            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt="img"
              />
            </div>
          </div>
        ))}
      </DeckContent>
    </DeckContainer>
  );
};
