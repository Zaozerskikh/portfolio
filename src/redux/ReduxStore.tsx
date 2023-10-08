import {combineReducers, configureStore} from "@reduxjs/toolkit";
import burgerReducer, {BurgerState} from "./burger_menu_reducer/BurgerMenuReducer";
import colorThemeReducer, {ColorThemeState} from "./color_theme_reducer/ColorThemeReducer";

const rootReducer = combineReducers({
  burgerMenu: burgerReducer,
  colorTheme: colorThemeReducer
});

export type RootState = {
  burgerMenu: BurgerState,
  colorTheme: ColorThemeState
};

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
