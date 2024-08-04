import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

// si destructuro NO ES REACTIVO
export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = () => {
    // console.log('funciona !!');

    // traigo los favoritos del local storage y los tipo 
    const favorites = JSON.parse(localStorage.getItem('favorite') ?? '[]') as FavoritePokemon[];

    // creo nuevos favoritos pero eliminando el seleccionado que es el pokemon que esta recibiendo 
    // el componente como prop y comparo su id con el id de algun pokemon en el arreglo obtenbido desde localstorage 
    // asi eliminara y creara nuevos favoritos
    const newFavorites = favorites.filter(p => p.id !== pokemon.id)

    // luego llamo a local storage nuevamente para poder guardar los nuevos favoritos sin el pokemon eliminadoi
    localStorage.setItem('favorites',JSON.stringify(newFavorites)); 
    
    setIsVisible(false)
  }
  return (
    <Show when={isVisible()}>

    <div class="flex flex-col justify-center items-center">
      <a href={`/pokemons/${pokemon.name}`}>
        <img 
            src={imageSrc} 
            alt={pokemon.name} 
            width="96" 
            height="96"
            style={`view-transition-name: ${pokemon.name}-image`}
        />
        <p class="capitalize">
          {" "}
          #{pokemon.id} {pokemon.name}
        </p>
      </a>

      <button class="text-red-400" onClick={deleteFavorite}>
        Borrar
      </button>
    </div>

    </Show>
  );
};
