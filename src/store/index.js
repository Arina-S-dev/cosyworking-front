import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import identification from '../Middlewares/identification';
import WorkspaceDetailMiddleware from '../Middlewares/workspaceDetail';
import reducer from '../reducers';

const middlewareEnhancer = applyMiddleware(identification, WorkspaceDetailMiddleware);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // le reducer
  reducer,
  composedEnhancers,

);

export default store;
