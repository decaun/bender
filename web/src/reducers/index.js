import { combineReducers } from "redux";
import GenericReducer from "./GenericReducer";
import RestReducer from "./RestReducer";
import UserReducer from "../routes/SwipeMatch/reducers/UserReducer";
import messages from '../routes/InstantMessaging/reducers/messages'
import MessageUsers from '../routes/InstantMessaging/reducers/MessageUsers'

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
