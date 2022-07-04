import { applyMiddleware, legacy_createStore,compose } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";
import { reducer } from "./AppReducer/reducer";
import { Authreducer } from "./AuthReducer/reducer";

const rootreducer =combineReducers({
 reducer,
 Authreducer
  })
  
const composeEnhancers     =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;
 export const store =legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))







if (window.Cypress) {
  window.store = store;
}
