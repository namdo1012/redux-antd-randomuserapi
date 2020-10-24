import React, { Component } from "react";
import Message from "./Message";
import ButtonGroup from "./ButtonGroup"
import { Button } from 'antd';
import { store } from './store';
import "antd/dist/antd.css";
import { getData } from './utils';



class App extends Component {

  dispatchChangeAction = () => {
    getData().then(userData => {
      const changeUserAction = {
        type: "CHANGE_USER",
        payload: { ...userData }
      }

      store.dispatch(changeUserAction);
    })

  }

  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
    return store.getState().firstHit ?
      (
        <div style={containerStyle}>
          <Message message={store.getState().message} />
          <ButtonGroup infos={["Name", "Email", "Phone", "Address"]} />
          <Button
            type="primary"
            onClick={this.dispatchChangeAction}
          >
            Change User
          </Button>
        </div>
      )
      :
      (
        <div>
          <Message message={store.getState().message} />
          <Button type="primary" onClick={this.dispatchChangeAction}> Get new user</Button>
        </div>
      )
  }
}

export default App;
