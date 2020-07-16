import { Blinky } from "../../../InitState";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../../constants";

const blinkyReducer = (state = Blinky, action: any) => {
  switch (action.type) {
    case "moveBlinky":
      switch (state.degree) {
        case RIGHT:
          return { ...state, left: +(state.left + 1 / 20).toFixed(2) };
        case TOP:
          return { ...state, top: +(state.top - 1 / 20).toFixed(2) };
        case LEFT:
          return { ...state, left: +(state.left - 1 / 20).toFixed(2) };
        case BOTTOM:
          return { ...state, top: +(state.top + 1 / 20).toFixed(2) };
      }
      break;
    case "changeDirection":
      switch (action.payload.degree) {
        case RIGHT:
          return {
            ...state,
            degree: RIGHT,
          };
        case LEFT:
          return {
            ...state,
            degree: LEFT,
          };
        case TOP:
          return {
            ...state,
            degree: TOP,
          };
        case BOTTOM:
          return {
            ...state,
            degree: BOTTOM,
          };
      }
      break;
    default:
      return state;
  }
};

export default blinkyReducer;
