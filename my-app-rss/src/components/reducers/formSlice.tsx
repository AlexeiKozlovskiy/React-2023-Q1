import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormInputData } from '../types';

const initialState: FormInputData[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormInputData>) {
      state.push(action.payload);
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
