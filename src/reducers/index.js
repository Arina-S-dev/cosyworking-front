import { combineReducers } from 'redux';

import userReducer from './user';
import workspacesReducer from './workspaces';
import publicProfileReducer from './publicProfile';

const rootReducer = combineReducers({
  workspaces: workspacesReducer,
  user: userReducer,
  publicProfile: publicProfileReducer,
});

export default rootReducer;
