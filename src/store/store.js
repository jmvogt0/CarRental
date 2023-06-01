import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer, persistStore, serializableMiddleware } from '../store/persistConfig';

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serializableMiddleware),
});

const persistor = persistStore(store);

export { store, persistor };
