import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MotionValue} from "framer-motion";

export interface BurgerState {
  isOpened: boolean;
  XPosition: MotionValue<number>
}

const initialState: BurgerState = {
  isOpened: false,
  XPosition: new MotionValue<number>()
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
    },
    setBurgerXPosition(state, action: PayloadAction<MotionValue<number>>) {
      state.XPosition = action.payload
    }
  }
});

export const {
  setIsBurgerShown,
  toggleBurger,
  setBurgerXPosition
} = burgerSlice.actions;

export default burgerSlice.reducer;
