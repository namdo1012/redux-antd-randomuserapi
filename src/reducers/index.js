export default (state, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      // do something
      const message = action.payload.message;
      // console.log(message);
      return {
        ...state,
        message,
      }
    default:
      return state;
  }
}