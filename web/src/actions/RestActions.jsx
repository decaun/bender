import axios from "axios";

export const RestAction = () => {
  return {
    type: "FETCH",
    payload: axios.get(
      "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
    )
  };
};
