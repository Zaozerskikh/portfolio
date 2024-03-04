import {configureStore} from "@reduxjs/toolkit";
import burgerReducer from "./BurgerMenuReducer";
import colorThemeReducer from "./ColorThemeReducer";
import langReducer from "./LangReducer";

const reduxStore = configureStore({
  reducer: {
    burger: burgerReducer,
    colorTheme: colorThemeReducer,
    lang: langReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default reduxStore;
export type RootStoreState = ReturnType<typeof reduxStore.getState>;