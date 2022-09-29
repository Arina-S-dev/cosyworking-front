import { combineReducers } from 'redux';

import userReducer from './user';
import workspacesReducer from './workspaces';
import searchReducer from './search';

const rootReducer = combineReducers({
  workspaces: workspacesReducer,
  user: userReducer,
  search: searchReducer,
});

export default rootReducer;
