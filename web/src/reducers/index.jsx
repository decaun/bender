import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import GenericReducer from "./GenericReducer";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  users: UserReducer,
  generic: GenericReducer
  //activeUser: ActiveUserReducer
  //naming done here for all application
});

export default allReducers;
