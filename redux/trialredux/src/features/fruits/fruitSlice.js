import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fruit: 'pineapple',
};

export const fruitSlice = createSlice({
  name: 'fruit',
  initialState,
  reducers: {
    changeFruitName: (state, action) => {
      state.fruit = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFruitName } = fruitSlice.actions;

export default fruitSlice.reducer;
