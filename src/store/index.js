import { createStore } from "redux";
import reducer from '../reducers';

import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: ''
}

const getData = async () => {
  const res = await axios('https://randomuser.me/api/?results=1');
  const data = res.data.results[0];

  initialState.name = data.name.first;
  initialState.email = data.email;
  initialState.phone = data.phone;
  initialState.address = data.location.city;
}

getData();
console.log(initialState);
export const store = createStore(reducer, initialState);