import { FIELD_TYPE } from "../constantsNonRedux";
import Calculator from "./Calculator.container";

const App = () => {
  return (
    <>
      {/* <div className="calculator-super-container">
        <div className="calculator-selector-container">
          <div className="calculator-selection"></div>
        </div>
        <div className="calculator-container">
          <div className="calculator-field"></div>
          <div className="calculator-field"></div>
          <div className="calculator-field"></div>
          <div className="calculator-field"></div>
          <div className="calculator-field"></div>
          <div className="calculator-field"></div>
        </div>
      </div> */}
      <Calculator calculatedFieldType={FIELD_TYPE.currentStat} />
    </>
  );
};

export default App;
