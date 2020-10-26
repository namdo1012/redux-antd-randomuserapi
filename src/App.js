import React, { Component } from "react";
import Message from "./Message";
import ButtonGroup from "./ButtonGroup"
import { Button, Spin } from 'antd';

import { store } from './store';
import "antd/dist/antd.css";
import { getData } from './utils';



class App extends Component {
  dispatchSpin = () => {
    const spinAction = {
      type: "SPIN_ACTION",
    }
    console.log('SPIN_ACTION ACTIVE :>>');
    store.dispatch(spinAction);
  }

  dispatchChangeAction = () => {
    this.dispatchSpin();
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
      justifyContent: "space-between"

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
          {!store.getState().gotData ? <Spin /> : null}
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
