const GenericReducer = (state = {}, action) => {
  switch (action.type) {
    case "GENERIC":
      console.log("Generic action received by reducer!", action.payload);
      return `${action.type} timestamp: ${Date.now()}`;
      break;

    default:
      break;
  }
  return state;
};

export default GenericReducer;
