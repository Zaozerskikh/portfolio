import { createSlice } from '@reduxjs/toolkit';
import {ColorTheme} from "../constants/ColorTheme";

export enum LocalStorageColorThemeFields {
  COLOR_THEME_STATE = 'COLOR_THEME_STATE'
}

const storedColorTheme = localStorage.getItem(LocalStorageColorThemeFields.COLOR_THEME_STATE);
const initialState: ColorTheme = storedColorTheme ? JSON.parse(storedColorTheme).colorTheme : ColorTheme.WHITE;

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state = state === ColorTheme.WHITE ? ColorTheme.DARK : ColorTheme.WHITE;
      localStorage.setItem(LocalStorageColorThemeFields.COLOR_THEME_STATE, JSON.stringify({ colorTheme: state }));
      return state;
    },
    setWhiteTheme: (state) => {
      state = ColorTheme.WHITE;
      localStorage.setItem(LocalStorageColorThemeFields.COLOR_THEME_STATE, JSON.stringify({ colorTheme: state }));
      return state;
    },
    setDarkTheme: (state) => {
      state = ColorTheme.DARK;
      localStorage.setItem(LocalStorageColorThemeFields.COLOR_THEME_STATE, JSON.stringify({ colorTheme: state }));
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
