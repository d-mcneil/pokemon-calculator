import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import configureStore from "./redux/store";

import App from "./containers/App";

import "./index.scss";
import "../src/styles/app.styles.scss";
import "../src/styles/Navigation.styles.scss";
import "../src/styles/Calculator.styles.scss";
import "../src/styles/buttons.styles.scss";
import "../src/styles/inputs.styles.scss";
import "../src/styles/labels.styles.scss";
import "../src/styles/selectors.styles.scss";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
