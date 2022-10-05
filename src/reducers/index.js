import { combineReducers } from 'redux';

import userReducer from './user';
import workspacesReducer from './workspaces';
import publicProfileReducer from './publicProfile';
import searchReducer from './search';

const rootReducer = combineReducers({
  workspaces: workspacesReducer,
  user: userReducer,
  publicProfile: publicProfileReducer,
  search: searchReducer,
});

export default rootReducer;
