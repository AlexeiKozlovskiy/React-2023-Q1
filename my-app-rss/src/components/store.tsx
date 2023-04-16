import { configureStore } from '@reduxjs/toolkit';
import formSlice from './reducers/formSlice';
import imagesSlice from './reducers/imagesSlice';
import searchSlice from './reducers/searchSlice';
import { unsplashApi } from './api/cardsApi';
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/formSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: {
    form: formSlice,
    images: imagesSlice,
    search: searchSlice,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
