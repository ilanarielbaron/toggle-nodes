import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, Store, CombinedState } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import rootReducer from "./store/reducer";

const store: Store<CombinedState<{ board: BoardState; }>, BoardAction> & {
    dispatch: DispatchType
} = createStore(rootReducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
