import React from "react";
import { connect } from "react-redux";
import { convertStringToLabel as label } from "../../functions";
import { NATURE, STAT_NAME_SHORT } from "../../constantsNonRedux";
import { updateNature } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => ({
  handleUpdateNature: (natureModifierPayload, natureValue) =>
    dispatch(updateNature(natureModifierPayload, natureValue)),
});

const NatureSelector = ({ handleUpdateNature }) => {
  const renderNatureOptions = () => {
    return NATURE.map((nature) => {
      const statIncreased = nature.increases
        ? label(STAT_NAME_SHORT[`${nature.increases}`]).replace(" ", "")
        : undefined;
      const statDecreased = nature.decreases
        ? label(STAT_NAME_SHORT[`${nature.decreases}`]).replace(" ", "")
        : undefined;

      return (
        <option
          data-attack={nature.attack}
          data-defense={nature.defense}
          data-specialattack={nature.specialAttack}
          data-specialdefense={nature.specialDefense}
          data-speed={nature.speed}
          value={nature.name}
          key={nature.name}
        >{`${statIncreased ? `+${statIncreased} ` : ""}${
          statDecreased ? `-${statDecreased} -> ` : "Neutral -> "
        }${label(nature.name)}`}</option>
      );
    });
  };

  const onChange = (event) => {
    const nature = event.target.selectedOptions[0];
    const { attack, defense, specialattack, specialdefense, speed } =
      nature.dataset;
    handleUpdateNature(
      {
        attack: Number(attack),
        defense: Number(defense),
        specialAttack: Number(specialattack),
        specialDefense: Number(specialdefense),
        speed: Number(speed),
      },
      nature.value
    );
  };

  return (
    <select defaultValue="nature" onChange={onChange} id="nature-selector">
      <option disabled value="nature" key="nature">
        Nature
      </option>
      {renderNatureOptions()}
    </select>
  );
};

export default connect(null, mapDispatchToProps)(NatureSelector);
