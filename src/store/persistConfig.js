import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../reducer/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducerWithPersist = persistReducer(persistConfig, rootReducer);

const serializableMiddleware = createSerializableStateInvariantMiddleware();

export { rootReducerWithPersist as persistedReducer, persistStore, serializableMiddleware };
