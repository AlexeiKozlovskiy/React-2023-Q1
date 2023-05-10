import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface searchState {
  searchValue: string;
}

const initialState: searchState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchData(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    clearSearchData() {
      return initialState;
    },
  },
});

export const { setSearchData, clearSearchData } = searchSlice.actions;
export default searchSlice.reducer;
