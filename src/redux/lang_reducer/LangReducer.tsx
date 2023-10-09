import {Lang} from "./Lang";

export enum LocalStorageLangFields {
  LANG_STATE = 'LANG_STATE'
}
export interface LangState {
  lang: Lang;
}

enum LangActionTypes {
  SET_LANG = 'SET_LANG',
  TOGGLE_LANG = 'TOGGLE_LANG'
}

const storedState = localStorage.getItem(LocalStorageLangFields.LANG_STATE);
const initialState: LangState = JSON.parse(storedState || JSON.stringify({lang: Lang.ENG}))

export const setLang = (lang: Lang) => ({
  type: LangActionTypes.SET_LANG,
  lang: lang
});

export const toggleLang = () => ({
  type: LangActionTypes.TOGGLE_LANG
})


const langReducer = (
  state = initialState,
  action: ReturnType<typeof setLang> | ReturnType<typeof toggleLang>
): LangState => {
  let newState;
  switch (action.type) {
    case LangActionTypes.SET_LANG:
      newState = { lang: (action as ReturnType<typeof setLang>).lang}
      localStorage.setItem(LocalStorageLangFields.LANG_STATE, JSON.stringify(newState));
      return newState;
    case LangActionTypes.TOGGLE_LANG:
      newState = { lang: state.lang === Lang.ENG ? Lang.RUS : Lang.ENG }
      localStorage.setItem(LocalStorageLangFields.LANG_STATE, JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default langReducer
