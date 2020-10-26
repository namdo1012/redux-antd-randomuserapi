import React from 'react';
import { store } from './store';
import { setMessage } from './actions';

import { Button, Row, Col } from 'antd';

const dispatchBtnClickAction = (e) => {
  const button = e.target.childNodes[1].textContent.toLowerCase();
  const message = store.getState()[button];
  console.log(store.getState());
  store.dispatch(setMessage(message));
  console.log(store.getState().message);
}

const ButtonGroup = ({ infos }) => {
  return (
    <Row align="middle">
      {
        infos.map((info, i) => {
          return (
            <Col lg={{ span: 6 }} xs={{ span: 12 }}>
              <Button
                type="primary"
                icon="cloud"
                data-message={store.getState()[info.toLowerCase()]}
                size="large"
                shape="round"
                key={`btn-${i}`}
                className={`app__button app__button-${i}`}
                onClick={dispatchBtnClickAction}
              >
                {info}
              </Button>
            </Col>
          )
        })
      }
    </Row >
  )
}

export default ButtonGroup;