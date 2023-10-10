import {combineReducers, configureStore} from "@reduxjs/toolkit";
import burgerReducer, {BurgerState} from "./burger_menu_reducer/BurgerMenuReducer";
import colorThemeReducer, {ColorThemeState} from "./color_theme_reducer/ColorThemeReducer";
import langReducer, {LangState} from "./lang_reducer/LangReducer";
import projectArrReducer, {ProjectInfoState} from "./projects_reducer/ProjectReducer";

const rootReducer = combineReducers({
  burgerMenu: burgerReducer,
  colorTheme: colorThemeReducer,
  lang: langReducer,
  projects: projectArrReducer,
});

export type RootState = {
  burgerMenu: BurgerState,
  colorTheme: ColorThemeState,
  lang: LangState,
  projects: ProjectInfoState
};

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;
