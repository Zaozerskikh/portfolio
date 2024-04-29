import {configureStore} from "@reduxjs/toolkit";
import burgerReducer from "./BurgerMenuReducer";
import colorThemeReducer from "./ColorThemeReducer";

const reduxStore = configureStore({
  reducer: {
    burger: burgerReducer,
    colorTheme: colorThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default reduxStore;
export type RootStoreState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
