import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BurgerState {
  isOpened: boolean;
}

const initialState: BurgerState = {
  isOpened: false
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setIsBurgerShown(state, action: PayloadAction<boolean>) {
      state.isOpened = action.payload;
    },
    toggleBurger(state) {
      state.isOpened = !state.isOpened;
    }
  }
});

export const {
  setIsBurgerShown,
  toggleBurger
} = burgerSlice.actions;

export default burgerSlice.reducer;
