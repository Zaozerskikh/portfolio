import { createSlice } from '@reduxjs/toolkit';
import {ColorTheme} from "../constants/ColorTheme";
import Cookies from "js-cookie";

const storedColorTheme = Cookies.get('color_theme')
const initialState: ColorTheme = storedColorTheme ? storedColorTheme as ColorTheme : ColorTheme.WHITE;

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state = state === ColorTheme.WHITE ? ColorTheme.DARK : ColorTheme.WHITE;
      Cookies.set('color_theme', state)
      return state;
    },
    setWhiteTheme: (state) => {
      state = ColorTheme.WHITE;
      Cookies.set('color_theme', state)
      return state;
    },
    setDarkTheme: (state) => {
      state = ColorTheme.DARK;
      Cookies.set('color_theme', state)
      return state;
    }
  }
});

export const {
  toggleTheme,
  setWhiteTheme,
  setDarkTheme
} = colorThemeSlice.actions;

export default colorThemeSlice.reducer;
