const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null
};

const RestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PENDING": //1st cases are from promise middleware
    case "FETCH_STARTED": {
      return { ...state, fetching: true };
    }
    case "FETCH_REJECTED":
    case "FETCH_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_FULFILLED":
    case "FETCH_COMPLETED": {
      return { ...state, fetching: false, fetched: true, data: action.payload };
    }
    default:
      break;
  }
  return state;
};

export default RestReducer;
