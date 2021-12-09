import { collapsed__TOGGLE_CLOUSE, collapsed__TOGGLE_OPEN, isFullScreen_TOGGLE_CLOUSE, isFullScreen_TOGGLE_OPEN } from 'store/action/types';

// collapsed
export function collapsed(state = false, action) {
  switch (action.type) {
    case collapsed__TOGGLE_OPEN:
      return false;
    case collapsed__TOGGLE_CLOUSE:
      return true;
    default:
      return state;
  };
};

// isFullScreen
export function isFullScreen(state = false, action) {
  switch (action.type) {
    case isFullScreen_TOGGLE_CLOUSE:
      return false;
    case isFullScreen_TOGGLE_OPEN:
      return true;
    default:
      return state;
  };
};