import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: "filter",
  initialState: { filter: ''},
  reducers: {
     setContactsFilter(state, action) {
        state.filter = action.payload;
      },
    },
  },
);

export const { setContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;