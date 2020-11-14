import storage from 'redux-persist/lib/storage/';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'agro',
      storage,
      whitelist: ['auth', 'user', 'plantation', 'station', 'parameter'],
    },
    reducers
  );

  return persistedReducer;
};
