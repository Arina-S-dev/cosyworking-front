/* eslint-disable max-len */
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import identification from '../Middlewares/identification';
import WorkspaceDetailMiddleware from '../Middlewares/workspaceDetail';
import searchMiddleware from '../Middlewares/searchMiddleware';
import reducer from '../reducers/index';
import randomAnnouncesMiddleware from '../Middlewares/randomAnnounceMiddleware';
import profilMiddleware from '../Middlewares/profilMiddleware';
import requestsMiddleware from '../Middlewares/requestsMiddleware';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// eslint-disable-next-line max-len
const middlewareEnhancer = applyMiddleware(requestsMiddleware, randomAnnouncesMiddleware, identification, searchMiddleware, WorkspaceDetailMiddleware, profilMiddleware);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // le reducer
  persistedReducer,
  composedEnhancers,
);

const persistor = persistStore(store);

export { store, persistor };
// // eslint-disable-next-line max-len
// // const middlewareEnhancer = applyMiddleware(randomAnnouncesMiddleware, identification, searchMiddleware, WorkspaceDetailMiddleware, profilMiddleware);

// const composedEnhancers = composeWithDevTools({ trace: true });

// const store = createStore(
//   // le reducer
//   reducer,
//   composedEnhancers(applyMiddleware(randomAnnouncesMiddleware, identification, searchMiddleware, WorkspaceDetailMiddleware, profilMiddleware)),

// );
