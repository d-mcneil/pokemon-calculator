import { Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation.component";
import { FIELD_TYPE } from "../constantsNonRedux";
import Calculator from "./Calculator/Calculator.container";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route
          element={<Calculator calculatedFieldType={FIELD_TYPE.currentStat} />}
          index
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
  );
};

export default App;
