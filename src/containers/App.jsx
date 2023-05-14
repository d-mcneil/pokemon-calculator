import { Routes, Route } from "react-router-dom";
import { FIELD_TYPE } from "../constantsNonRedux";
import Navigation from "./Navigation.container";
import Calculator from "./Calculator.container";
import EvButtons from "./EvButtons.container";
import IvButtons from "./IvButtons.container";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route
          element={
            <Calculator calculatedFieldType={FIELD_TYPE.currentStat}>
              <IvButtons />
              <EvButtons />
            </Calculator>
          }
          index
        />
        <Route
          element={
            <Calculator calculatedFieldType={FIELD_TYPE.ev}>
              <IvButtons />
            </Calculator>
          }
          path={"ev"}
        />
        <Route
          element={
            <Calculator calculatedFieldType={FIELD_TYPE.iv}>
              <EvButtons />
            </Calculator>
          }
          path={"iv"}
        />
      </Route>
    </Routes>
  );
};

export default App;
