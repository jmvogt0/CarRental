import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer, persistStore, serializableMiddleware } from '../store/persistConfig';

const customizedMiddleware = [];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Deaktiviere die Serialisierungsüberprüfung
    }).concat(customizedMiddleware),
});

const persistor = persistStore(store);

export { store, persistor };
