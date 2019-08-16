import React from "react";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import axios from "axios";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

const middleware = applyMiddleware(logger, thunk, promise);
const store = createStore(allReducers, middleware);

/*
store.dispatch(dispatch => {
  dispatch({ type: "FETCH_STARTED" });
  axios
    .get(
      "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
    )
    .then(response => {
      dispatch({ type: "FETCH_COMPLETED", payload: response.data });
    })
    .catch(err => {
      dispatch({ type: "FETCH_ERROR", payload: err });
    });
});
*/
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
