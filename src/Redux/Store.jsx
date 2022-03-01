/* eslint-disable no-lone-blocks */
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); {/* This is to add the redux devTools feature */ }
export default store