import { combineReducers } from 'redux';

import userReducer from './user';
import workspacesReducer from './workspaces';
import searchhomeReducer from './searchhome';

const rootReducer = combineReducers({
  workspaces: workspacesReducer,
  user: userReducer,
  searchhome: searchhomeReducer,
});

export default rootReducer;
