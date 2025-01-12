import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/auth-slice';
import logger from 'redux-logger';
import storageSession from 'redux-persist/lib/storage/session';
import {persistReducer} from 'redux-persist';
import {persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  blacklist: [], //reducer names listed here will not be persisted
  whitelist: ["auth"],
  debug: true,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export default store;
