export interface BurgerState {
  isOpened: boolean;
}

enum BurgerActionTypes {
  SET_IS_BURGER_SHOWN = 'SET_IS_BURGER_SHOWN',
  TOGGLE_BURGER = 'TOGGLE_BURGER',
}

const initialState: BurgerState = {
  isOpened: false
};

export const setIsBurgerShown = (isShown: boolean) => ({
  type: BurgerActionTypes.SET_IS_BURGER_SHOWN ,
  isShown: isShown
});

export const toggleBurger = () => ({
  type: BurgerActionTypes.TOGGLE_BURGER,
});

const burgerReducer = (
  state = initialState,
  action: ReturnType<typeof setIsBurgerShown> | ReturnType<typeof toggleBurger>
): BurgerState => {
  switch (action.type) {
    case BurgerActionTypes.TOGGLE_BURGER:
      return { isOpened: !state.isOpened};
    case BurgerActionTypes.SET_IS_BURGER_SHOWN:
      return { isOpened: (action as ReturnType<typeof setIsBurgerShown>).isShown};
    default:
      return state;
  }
};

export default burgerReducer
