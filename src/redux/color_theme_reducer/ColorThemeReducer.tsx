import {ColorTheme} from "./ColorTheme";

export enum LocalStorageColorThemeFields {
  COLOR_THEME_STATE = 'COLOR_THEME_STATE'
}
export interface ColorThemeState {
  colorTheme: ColorTheme;
}

enum ColorThemeActionTypes {
  TOGGLE_THEME = 'TOGGLE_THEME',
  SET_WHITE_THEME ='SET_WHITE_THEME',
  SET_BLACK_THEME ='SET_BLACK_THEME'
}

const storedColorTheme = localStorage.getItem(LocalStorageColorThemeFields.COLOR_THEME_STATE);

const initialState: ColorThemeState = {
  colorTheme: (storedColorTheme as ColorTheme) || ColorTheme.WHITE
};

export const toggleColorTheme = () => ({
  type: ColorThemeActionTypes.TOGGLE_THEME
});

export const setWhiteTheme = () => ({
  type: ColorThemeActionTypes.SET_WHITE_THEME
});

export const setBlackTheme = () => ({
  type: ColorThemeActionTypes.SET_BLACK_THEME
});

const colorThemeReducer = (
  state = initialState,
  action:
    ReturnType<typeof toggleColorTheme> |
    ReturnType<typeof setBlackTheme> |
    ReturnType<typeof setWhiteTheme>
): ColorThemeState => {
  let newState: ColorThemeState;

  switch (action.type) {
    case ColorThemeActionTypes.TOGGLE_THEME:
      if (state.colorTheme === ColorTheme.WHITE) {
        newState = { colorTheme: ColorTheme.BLACK }
      } else {
        newState = newState = { colorTheme: ColorTheme.WHITE }
      }
      break
    case ColorThemeActionTypes.SET_WHITE_THEME:
      newState = newState = { colorTheme: ColorTheme.WHITE }
      break
    case ColorThemeActionTypes.SET_BLACK_THEME:
      newState = { colorTheme: ColorTheme.BLACK }
      break
    default:
      return state;
  }

  localStorage.setItem(LocalStorageColorThemeFields.COLOR_THEME_STATE, JSON.stringify(newState));
  return newState
};

export default colorThemeReducer
