import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import identification from '../Middlewares/identification';
import reducer from '../reducers/index';
import randomAnnouncesMiddleware from '../Middlewares/randomAnnounceMiddleware';

const middlewareEnhancer = applyMiddleware(randomAnnouncesMiddleware, identification);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // le reducer
  reducer,
  composedEnhancers,

);

export default store;
