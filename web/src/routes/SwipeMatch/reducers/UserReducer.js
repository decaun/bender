const initialState = {
  1: {
    id: 1,
    url: "https://placeimg.com/250/250/people",
    tag: "First"
  },
  2: {
    id: 2,
    url: "https://placeimg.com/250/250/animal",
    tag: "Second"
  },
  3: {
    id: 3,
    url: "https://placeimg.com/250/250/ananas",
    tag: "Third"
  },
  currentCounterPointer: 1,
  nextCounterPointer: 2
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWIPED":
      switch (state.currentCounterPointer) {
        case 1:
          return {
            ...state,
            currentCounterPointer: state.currentCounterPointer + 1,
            nextCounterPointer: state.nextCounterPointer + 1
          };
        case 2:
          return {
            ...state,
            currentCounterPointer: state.currentCounterPointer + 1,
            nextCounterPointer: 1
          };
        case 3:
          return {
            ...state,
            currentCounterPointer: 1,
            nextCounterPointer: state.nextCounterPointer + 1
          };
        default:
          break;
      }
      break;
    default:
      break;
  }
  return state;
};

export default UserReducer;
