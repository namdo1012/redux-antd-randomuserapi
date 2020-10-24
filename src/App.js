import React, { Component } from "react";
import Message from "./Message";
import ButtonGroup from "./ButtonGroup"
import { store } from './store';

class App extends Component {
  render() {
    console.log("From app: ", Object.entries(store.getState()));
    return (
      <div>
        <Message message={store.getState().message} />
        <ButtonGroup infos={["Name", "Email", "Phone", "Address"]} />
      </div>
    )
  }
}

export default App;
