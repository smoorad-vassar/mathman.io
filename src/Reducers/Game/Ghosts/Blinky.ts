import { Blinky } from "../../../InitState";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../../constants";

const blinkyReducer = (state = Blinky, action: any) => {
  switch (action.type) {
    case "moveBlinky":
      switch (state.degree) {
        case RIGHT:
          return { ...state, left: +(state.left + 1 / 20).toFixed(2) };
        case TOP:
          return { ...state, top: +(state.top + 1 / 20).toFixed(2) };
        case LEFT:
          return { ...state, left: +(state.left - 1 / 20).toFixed(2) };
        case BOTTOM:
          return { ...state, top: +(state.top + 1 / 20).toFixed(2) };
      }
    case "changeDirection":
      switch (action.payload.degree) {
        case RIGHT:
          return {
            ...state,
            left: +(state.left + 1 / 20).toFixed(2),
            degree: RIGHT,
          };
        case LEFT:
          return {
            ...state,
            left: +(state.left - 1 / 20).toFixed(2),
            degree: LEFT,
          };
        case TOP:
          return {
            ...state,
            top: +(state.top - 1 / 20).toFixed(2),
            degree: TOP,
          };
        case BOTTOM:
          return {
            ...state,
            top: +(state.top + 1 / 20).toFixed(2),
            degree: BOTTOM,
          };
      }
    default:
      return state;
  }
};

export default blinkyReducer;
