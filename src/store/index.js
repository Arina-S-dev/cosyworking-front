import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import identification from '../Middlewares/identification';
import searchMiddleware from '../Middlewares/searchMiddleware';
import reducer from '../reducers';

const middlewareEnhancer = applyMiddleware(identification, searchMiddleware);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // le reducer
  reducer,
  composedEnhancers,

);

export default store;
