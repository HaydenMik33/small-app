import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import characters from "./ducks/characters";

export default createStore(characters, applyMiddleware(promiseMiddleware()));
