import { combineReducers } from 'redux';

import workspacesReducer from './workspaces';
import searchhomeReducer from './searchhome';
import randomannounceReducer from './randomAnnounce';

const rootReducer = combineReducers({
  workspaces: workspacesReducer,
  searchhome: searchhomeReducer,
  randomannounce: randomannounceReducer,

});

export default rootReducer;
