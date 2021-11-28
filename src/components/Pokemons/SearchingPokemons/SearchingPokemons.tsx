import  React, {useMemo } from "react";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import {useObservableState} from 'observable-hooks';
import { pokemon$, selected$ } from "../../../store";
import { SearchingPokemonsContainer } from "./styled-SearchingPokemons";

export const SearchingPokemons = () => {
    const search$ = useMemo(() => new BehaviorSubject(""), [])
    const [filteredPokemon] = useObservableState(() =>
    pokemon$.pipe(
      combineLatestWith(search$),
      map(([pokemon, search]) => pokemon.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
    ), []
    )
  
    return (
      <div>
        <div>
         <input
          type="text"
          value={search$.value}
          onChange={(e) => search$.next(e.target.value)}
        /> 
        </div>
        
        <SearchingPokemonsContainer>
          {filteredPokemon.map((p) => (
            <div key={p.name}>
              <input
                type="checkbox"
                checked={p.selected}
                onChange={() => {
                  
                  if(selected$.value.includes(p.id)) {
                    selected$.next(selected$.value.filter(id => id !== p.id))
                  } else {
                    selected$.next([...selected$.value, p.id]);
                  }
                }}
              />
              <strong>{p.name}</strong> - {p.power}
            </div>
          ))}
        </SearchingPokemonsContainer>
      </div>
    );
  };