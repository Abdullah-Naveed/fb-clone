import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import {Provider} from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
          <BrowserRouter>
              <div className="App">
                  <Route exact path="/" component={App} />
              </div>
          </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
