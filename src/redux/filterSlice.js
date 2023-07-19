import { createSlice } from '@reduxjs/toolkit';
import { FILTER } from './constants';

const filterSlice = createSlice({
  name: FILTER,
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
