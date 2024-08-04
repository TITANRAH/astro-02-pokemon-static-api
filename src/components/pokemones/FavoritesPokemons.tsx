import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemon";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  // para usar local storage tuve que poner en el llamado de este componente
  // la propiedad client:only="solid.js"
  const FavoritesPokemons = JSON.parse(
    localStorage.getItem("favorites") ?? "[]"
  );

  return FavoritesPokemons;
};

export const FavoritesPokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
};
