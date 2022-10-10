import { combineReducers } from 'redux';
import randomannounceReducer from './randomAnnounce';
import workspacesReducer from './workspaces';
import publicProfileReducer from './publicProfile';
import userReducer from './user';
import searchReducer from './search';
import requestsReducer from './requests';

const rootReducer = combineReducers({
  workspaces: workspacesReducer,
  randomannounce: randomannounceReducer,
  user: userReducer,
  publicProfile: publicProfileReducer,
  search: searchReducer,
  requests: requestsReducer,
});

export default rootReducer;
