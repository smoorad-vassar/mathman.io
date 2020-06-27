import { Blinky } from "../../../InitState";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../../constants";

const blinkyReducer = (state = Blinky, action: any) => {
  switch (action.type) {
    case "moveBlinky":
      switch (state.degree) {
        case 0:
          return { ...state, left: +(state.left + 1 / 20).toFixed(2) };
        case 90:
          return { ...state, top: +(state.top + 1 / 20).toFixed(2) };
        case 180:
          return { ...state, left: +(state.left - 1 / 20).toFixed(2) };
        case 270:
          return { ...state, top: +(state.top + 1 / 20).toFixed(2) };
      }
    case "changeDirection":
      switch (action.payload.degree) {
        case RIGHT:
          return {
            ...state,
            left: +(state.left + 1 / 20).toFixed(2),
            degree: 0,
          };
        case LEFT:
          return {
            ...state,
            left: +(state.left - 1 / 20).toFixed(2),
            degree: 180,
          };
        case TOP:
          return {
            ...state,
            top: +(state.top - 1 / 20).toFixed(2),
            degree: 270,
          };
        case BOTTOM:
          return {
            ...state,
            top: +(state.top + 1 / 20).toFixed(2),
            degree: 90,
          };
      }
    default:
      return state;
  }
};

export default blinkyReducer;
