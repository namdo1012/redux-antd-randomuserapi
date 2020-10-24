import { createStore } from "redux";
import reducer from '../reducers';

let initialState = {
  firstHit: false,
};

export const store = createStore(reducer, initialState);