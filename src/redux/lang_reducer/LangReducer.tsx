import {Lang} from "./Lang";

export enum LocalStorageLangFields {
  LANG_STATE = 'LANG_STATE'
}
export interface LangState {
  lang: Lang;
}

enum LangActionTypes {
  SET_LANG = 'SET_LANG',
}

const storedState = localStorage.getItem(LocalStorageLangFields.LANG_STATE);
const initialState: LangState = JSON.parse(storedState || JSON.stringify({lang: Lang.ENG}))

export const setLang = (lang: Lang) => ({
  type: LangActionTypes.SET_LANG,
  lang: lang
});


const langReducer = (
  state = initialState,
  action: ReturnType<typeof setLang>
): LangState => {
  switch (action.type) {
    case LangActionTypes.SET_LANG:
      const newState = { lang: action.lang}
      localStorage.setItem(LocalStorageLangFields.LANG_STATE, JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default langReducer
