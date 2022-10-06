import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import identification from '../Middlewares/identification';
import searchMiddleware from '../Middlewares/searchMiddleware';
import reducer from '../reducers/index';
import randomAnnouncesMiddleware from '../Middlewares/randomAnnounceMiddleware';

// eslint-disable-next-line max-len
const middlewareEnhancer = applyMiddleware(randomAnnouncesMiddleware, identification, searchMiddleware);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // le reducer
  reducer,
  composedEnhancers,

);

export default store;
