import React from "react";

const Message = ({ message }) => {
  return (
    <div className="hello-world">
      <span className="hello-world__tech">{message}</span>
    </div>
  );
};


export default Message;
