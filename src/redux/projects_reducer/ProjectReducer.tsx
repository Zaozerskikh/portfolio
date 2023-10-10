import {ProjectInfo} from "./ProjectInfo";

export enum LocalStorageProjectArrFields {
  PROJECT_ARR_STATE = 'PROJECT_ARR_STATE'
}
export interface ProjectInfoState {
  projects: ProjectInfo[];
}

enum ProjectArrActionTypes {
  SET_PROJECT_ARR_STATE = 'SET_PROJECT_ARR_STATE'
}

const storedProjectArr = localStorage.getItem(LocalStorageProjectArrFields.PROJECT_ARR_STATE);
const initialState: ProjectInfoState = JSON.parse(storedProjectArr || JSON.stringify({projects: []}))

export const setProjectArr = (projectArr: ProjectInfo[]) => ({
  type: ProjectArrActionTypes.SET_PROJECT_ARR_STATE,
  projects: projectArr
});

const projectArrReducer = (
  state = initialState,
  action: ReturnType<typeof setProjectArr>
): ProjectInfoState => {
  let newState: ProjectInfoState

  switch (action.type) {
    case ProjectArrActionTypes.SET_PROJECT_ARR_STATE:
      newState = { projects: action.projects }
      break
    default:
      return state;
  }

  localStorage.setItem(LocalStorageProjectArrFields.PROJECT_ARR_STATE, JSON.stringify(newState));
  return newState
};

export default projectArrReducer
