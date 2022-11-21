import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
    filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
     setContactsFilter(state, action) {
        state.filter = action.payload;
      },
    },
  },
);

export const { setContactsFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;