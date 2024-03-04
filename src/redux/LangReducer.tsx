import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Lang} from "../constants/Lang";

export enum LocalStorageLangFields {
  LANG_STATE = 'LANG_STATE'
}

const storedState = localStorage.getItem(LocalStorageLangFields.LANG_STATE);
const initialState: Lang = storedState ? JSON.parse(storedState).lang : Lang.ENG;

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<Lang>) => {
      state = action.payload;
      localStorage.setItem(LocalStorageLangFields.LANG_STATE, JSON.stringify({ lang: state }));
      return state;
    },
    toggleLang: (state) => {
      state = state === Lang.ENG ? Lang.RUS : Lang.ENG;
      localStorage.setItem(LocalStorageLangFields.LANG_STATE, JSON.stringify({ lang: state }));
      return state;
    }
  }
});

export const {
  setLang,
  toggleLang
} = langSlice.actions;

export default langSlice.reducer;
