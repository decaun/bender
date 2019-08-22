import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import GenericReducer from "./GenericReducer";
import RestReducer from "./RestReducer";
import messages from './messages'
import MessageUsers from './MessageUsers'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  users: UserReducer,
  generic: GenericReducer,
  rest: RestReducer,
  messages,
  MessageUsers
  //activeUser: ActiveUserReducer
  //naming done here for all application
});

export default allReducers;
