import { combineReducers } from 'redux';

import userReducer from './user';
import workspacesReducer from './workspaces';

const rootReducer = combineReducers({
  workspaces: workspacesReducer,
  user: userReducer,
});

export default rootReducer;
