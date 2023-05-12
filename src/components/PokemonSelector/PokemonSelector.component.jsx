import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  populatePokemonSelector,
  setPokemonBaseStats,
} from "../../redux/actions";
import {
  cleanPokemonName,
  fetchPokemonBaseStats,
  stringDexNumber,
} from "../../functions";

const mapStateToProps = (state) => ({
  pokemonOptions: state.pokemonSelector.pokemonOptions,
});

const mapDispatchToProps = (dispatch) => ({
  handlePopulatePokemonSelector: (pokemonArray) =>
    dispatch(populatePokemonSelector(pokemonArray)),
  handleSelectPokemon: (pokemonName, baseStats) =>
    dispatch(setPokemonBaseStats(pokemonName, baseStats)),
});

const PokemonSelector = ({
  pokemonOptions,
  handlePopulatePokemonSelector,
  handleSelectPokemon,
}) => {
  useEffect(() => {
    if (!pokemonOptions.length) {
      fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=1010")
        .then((response) => response.json())
        .then((data) =>
          data.results.map((pokemonObject, index) => {
            return {
              ...pokemonObject,
              dexNumber: index + 1,
              url: pokemonObject.url.replace("-species", ""),
            };
          })
        )
        .then(handlePopulatePokemonSelector)
        .catch(console.log);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (event) => {
    fetchPokemonBaseStats(event.target.value)
      .then((baseStats) => {
        handleSelectPokemon(
          event.target.selectedOptions[0].getAttribute("data-name"),
          baseStats
        );
      })
      .catch(console.log);
  };

  const renderPokemonOptions = pokemonOptions.map((pokemon) => {
    const { name, dexNumber, url } = pokemon;

    // prettier-ignore
    return (
      <option
        value={url}
        // data-dex-number={dexNumber}
        data-name={name}
        key={name}
      >
        {stringDexNumber(dexNumber)} &nbsp; {cleanPokemonName(name)}
      </option>
    );
  });

  return (
    <select
      defaultValue={"pokemon"}
      onChange={handleOnChange}
      id="pokemon-selector"
    >
      <option disabled value={"pokemon"}>
        Select a Pokémon
      </option>
      {renderPokemonOptions}
    </select>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSelector);
