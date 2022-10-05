import { combineReducers } from 'redux';
import searchhomeReducer from './searchhome';
import randomannounceReducer from './randomAnnounce';
import workspacesReducer from './workspaces';
import publicProfileReducer from './publicProfile';
import userReducer from './user';

const rootReducer = combineReducers({
  workspaces: workspacesReducer,
  searchhome: searchhomeReducer,
  randomannounce: randomannounceReducer,
  user: userReducer,
  publicProfile: publicProfileReducer,
});

export default rootReducer;
