import { Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation.component";
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

      <Routes>
        <Route path={"/"} element={<Navigation />}>
          <Route
            element={
              <Calculator calculatedFieldType={FIELD_TYPE.currentStat} />
            }
            path={"current-stat"}
          />
          <Route
            element={<Calculator calculatedFieldType={FIELD_TYPE.ev} />}
            path={"ev"}
          />
          <Route
            element={<Calculator calculatedFieldType={FIELD_TYPE.iv} />}
            path={"iv"}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
