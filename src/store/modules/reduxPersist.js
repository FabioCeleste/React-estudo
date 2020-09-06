import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'MyGameListv1',
      storage,
      whitelist: ['exampleReducer'],
    },
    reducers
  );

  return persistedReducer;
};
