import {LoaderSquareColor} from "./LoaderSquareColor";

export interface LoaderColorState {
  1: LoaderSquareColor;
  2: LoaderSquareColor;
  3: LoaderSquareColor;
  4: LoaderSquareColor;
}

export const loaderColorStates: LoaderColorState[] = [
  {
    1: LoaderSquareColor.VIOLET,
    2: LoaderSquareColor.GREY,
    3: LoaderSquareColor.BLUE,
    4: LoaderSquareColor.GREY
  },
  {
    1: LoaderSquareColor.GREY,
    2: LoaderSquareColor.VIOLET,
    3: LoaderSquareColor.BLUE,
    4: LoaderSquareColor.GREY
  },
  {
    1: LoaderSquareColor.BLUE,
    2: LoaderSquareColor.VIOLET,
    3: LoaderSquareColor.GREY,
    4: LoaderSquareColor.GREY
  },
  {
    1: LoaderSquareColor.BLUE,
    2: LoaderSquareColor.GREY,
    3: LoaderSquareColor.GREY,
    4: LoaderSquareColor.VIOLET
  },
  {
    1: LoaderSquareColor.GREY,
    2: LoaderSquareColor.BLUE,
    3: LoaderSquareColor.GREY,
    4: LoaderSquareColor.VIOLET
  },
  {
    1: LoaderSquareColor.GREY,
    2: LoaderSquareColor.BLUE,
    3: LoaderSquareColor.VIOLET,
    4: LoaderSquareColor.GREY
  },
  {
    1: LoaderSquareColor.GREY,
    2: LoaderSquareColor.GREY,
    3: LoaderSquareColor.VIOLET,
    4: LoaderSquareColor.BLUE
  },
  {
    1: LoaderSquareColor.VIOLET,
    2: LoaderSquareColor.GREY,
    3: LoaderSquareColor.GREY,
    4: LoaderSquareColor.BLUE
  },
]
