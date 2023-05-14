import React, { useEffect } from "react";
import { connect } from "react-redux";
import { populatePokemonSelector, setPokemonBaseStats } from "../redux/actions";
import {
  cleanPokemonName,
  fetchPokemonBaseStats,
  stringDexNumber,
} from "../functions";
import { MAX_VALUE, SELECTOR_TYPE } from "../constantsNonRedux";

const mapStateToProps = (state) => ({
  pokemonOptions: state.pokemonSelector.pokemonOptions,
  filterfield: state.filterfields.pokemonFilterfield,
  currentPokemonName: state.pokemon.pokemon,
});

const mapDispatchToProps = (dispatch) => ({
  handlePopulatePokemonSelector: (pokemonArray) =>
    dispatch(populatePokemonSelector(pokemonArray)),
  handleSelectPokemon: (pokemonName, baseStats) =>
    dispatch(setPokemonBaseStats(pokemonName, baseStats)),
});

const PokemonSelector = ({
  pokemonOptions,
  filterfield,
  currentPokemonName,
  handlePopulatePokemonSelector,
  handleSelectPokemon,
}) => {
  // populate the pokemon selector
  useEffect(() => {
    if (!pokemonOptions.length) {
      fetch(
        `https://pokeapi.co/api/v2/pokemon-species/?limit=${MAX_VALUE.dexNumber}`
      )
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

  const handleFetchPokemonBaseStats = (url, name) =>
    fetchPokemonBaseStats(url)
      .then((baseStats) => {
        handleSelectPokemon(name, baseStats);
      })
      .catch(console.log);

  const handleOnChange = (event) =>
    handleFetchPokemonBaseStats(
      event.target.value,
      event.target.selectedOptions[0].getAttribute("data-name")
    );

  const filteredPokemonOptions = pokemonOptions.filter((pokemon) =>
    cleanPokemonName(pokemon.name)
      .toLowerCase()
      .includes(filterfield.toLowerCase())
  );

  // auto search if there is only one pokemon that includes the string in the filterfield
  // and
  // handle the option that is displayed in pokemonSelector when the filterfield is being used
  useEffect(() => {
    const pokemonSelectorElement = document.getElementById("pokemon-selector");

    if (pokemonSelectorElement !== document.activeElement) {
      // this means that the filterfield is being used and not the selector element itself
      // if it is the pokemonSelector itself that is being used to select pokemon, then filtering doesn't matter in the display of the selector

      if (!filteredPokemonOptions.length || filterfield === "") {
        pokemonSelectorElement.value = SELECTOR_TYPE.pokemon;
      } else {
        const { name, url } = filteredPokemonOptions[0];
        pokemonSelectorElement.value = url;
        if (
          filteredPokemonOptions.length === 1 &&
          name !== currentPokemonName
        ) {
          handleFetchPokemonBaseStats(url, name);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPokemonOptions]);

  const renderPokemonOptions = filteredPokemonOptions.map((pokemon) => {
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
      defaultValue={SELECTOR_TYPE.pokemon}
      onChange={handleOnChange}
      id="pokemon-selector"
    >
      <option disabled value={SELECTOR_TYPE.pokemon}>
        Select a Pokémon
      </option>
      {renderPokemonOptions}
    </select>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSelector);
