import { Pacman } from "../../../InitState";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../../constants";

const pacmanReducer = (state = Pacman, action: any) => {
  switch (action.type) {
    case "move":
      switch (state.degree) {
        case RIGHT:
          return { ...state, left: +(state.left + 1 / 20).toFixed(2) };
        case BOTTOM:
          return { ...state, top: +(state.top + 1 / 20).toFixed(2) };
        case LEFT:
          return { ...state, left: +(state.left - 1 / 20).toFixed(2) };
        case TOP:
          return { ...state, top: +(state.top - 1 / 20).toFixed(2) };
        default:
          return state;
      }
    case "changeDirectionPacman":
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
        default:
          return state;
      }
    case "set":
      return action.payload.pacman;
    default:
      return state;
  }
};

export default pacmanReducer;
