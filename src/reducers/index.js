export default (state, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      const message = action.payload.message;
      return {
        ...state,
        message,
      }

    case "CHANGE_USER":
      return {
        ...action.payload,
        firstHit: true,
        gotData: true
      };

    case "SPIN_ACTION":
      return {
        ...state,
        gotData: false
      }

    default:
      return state;
  }
}