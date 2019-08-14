export const GenericAction = () => {
  console.log("Sth fired!");
  return {
    type: "GENERIC",
    payload: "data"
  };
};
