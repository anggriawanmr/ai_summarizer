import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { articleApi } from './article';

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
