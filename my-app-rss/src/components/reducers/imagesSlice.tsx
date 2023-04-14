import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImagesProps } from '../types';

const initialState: ImagesProps[] = [];

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImagesData(state, action: PayloadAction<ImagesProps[]>) {
      return [...state, ...action.payload];
    },
    clearImagesData() {
      return initialState;
    },
  },
});

export const { setImagesData, clearImagesData } = imagesSlice.actions;
export default imagesSlice.reducer;
