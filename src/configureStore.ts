import { createStore, Store } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// Import the state interface and our combined reducers.
import { ApplicationState, rootReducer } from "./state";

export default function configureStore(): Store<ApplicationState> {
  const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["configure"],
  };

  const pReducer = persistReducer<ApplicationState>(persistConfig, rootReducer);

  return createStore(pReducer, undefined, undefined);
}
