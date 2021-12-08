import { TOGGLE_CLOUSE, TOGGLE_OPEN } from 'store/action/types';

// collapsed
export function collapsed(state = false, action) {
  switch (action.type) {
    case TOGGLE_OPEN:
      return false;
    case TOGGLE_CLOUSE:
      return true;
    default:
      return state;
  };
};