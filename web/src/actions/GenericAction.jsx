export const GenericAction = () => {
  console.log("Sth fired!");
  return {
    type: "USER_SELECTED",
    payload: "user"
  };
};
