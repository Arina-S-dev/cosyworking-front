import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import setConnexion from '../Middlewares/setConnexion';
import reducer from '../reducers';

const middlewareEnhancer = applyMiddleware(setConnexion);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // le reducer
  reducer,
  composedEnhancers,

);

export default store;
