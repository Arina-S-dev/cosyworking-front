import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import identification from '../Middlewares/identification';
import WorkspaceDetailMiddleware from '../Middlewares/workspaceDetail';
import searchMiddleware from '../Middlewares/searchMiddleware';
import reducer from '../reducers/index';
import randomAnnouncesMiddleware from '../Middlewares/randomAnnounceMiddleware';
import profilMiddleware from '../Middlewares/profilMiddleware';
import requestsMiddleware from '../Middlewares/requestsMiddleware';

// eslint-disable-next-line max-len
const middlewareEnhancer = applyMiddleware(requestsMiddleware, randomAnnouncesMiddleware, identification, searchMiddleware, WorkspaceDetailMiddleware, profilMiddleware);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // le reducer
  reducer,
  composedEnhancers,

);

export default store;
