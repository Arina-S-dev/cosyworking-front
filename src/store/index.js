import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import randomAnnouncesMiddleware from '../Middlewares/randomAnnounceMiddleware';
import reducer from '../reducers';

const middlewareEnhancer = applyMiddleware(randomAnnouncesMiddleware);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // le reducer
  reducer,
  composedEnhancers,

);

export default store;
