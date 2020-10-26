import { createStore } from "redux";
import reducer from '../reducers';

let initialState = {
  firstHit: false,
  gotData: true,
};

export const store = createStore(reducer, initialState);