import { Pacman } from "../../../InitState";

const playerReducer = (state = Pacman.degree, action: any) => {
  switch (action.type) {
    case "set":
      return action.payload.degree;
    default:
      return state;
  }
};

export default playerReducer;
