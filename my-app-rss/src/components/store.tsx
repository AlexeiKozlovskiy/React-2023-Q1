import { configureStore } from '@reduxjs/toolkit';
import formSlice from './reducers/formSlice';
import imagesSlice from './reducers/imagesSlice';
import searchSlice from './reducers/searchSlice';
import { unsplashApi } from './api/cardsApi';

export const store = configureStore({
  reducer: {
    form: formSlice,
    images: imagesSlice,
    search: searchSlice,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

export type AppStore = ReturnType<typeof configureStore>;
