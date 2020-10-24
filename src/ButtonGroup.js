import React from 'react';
import { store } from './store';
import { setMessage } from './actions';

const dispatchBtnClickAction = (e) => {
  const message = e.target.dataset.message;
  store.dispatch(setMessage(message));
  console.log(store.getState().message);
}

const ButtonGroup = ({ infos }) => {
  return (
    <div>
      {infos.map((info, i) => {
        return (
          <button
            data-message={store.getState()[info.toLowerCase()]}
            key={`btn-${i}`}
            className={`app__button app__button-${i}`}
            onClick={dispatchBtnClickAction}
          >
            {info}
          </button>
        )
      })}
    </div>
  )
}

export default ButtonGroup;