import { BehaviorSubject, map, combineLatestWith } from "rxjs";
export interface IPokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  power?: number;
  selected: boolean;
}

export const rawPokemon$ = new BehaviorSubject<IPokemon[]>([]);
const pokemonWithPower$ = rawPokemon$.pipe(
  map((pokemon) =>
    pokemon.map((el) => ({
      ...el,
      power:
        el.hp +
        el.attack +
        el.defense +
        el.special_attack +
        el.special_defense +
        el.speed,
    }))
  )
);

export const selected$ = new BehaviorSubject<number[]>([]);

export const pokemon$ = pokemonWithPower$.pipe(
  combineLatestWith(selected$),
  map(([pokemon, selected]) =>
    pokemon.map((p) => ({
      ...p,
      selected: selected.includes(p.id),
    }))
  )
);

export const deck$ = pokemon$.pipe(
  map((pokemon) => pokemon.filter((p) => p.selected))
);

fetch("/pokemon-simplified.json")
  .then((response) => response.json())
  .then((data) => rawPokemon$.next(data));
