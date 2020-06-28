import { Blinky } from "../../../InitState";

const blinkyDirectionReducer = (state = Blinky.degree, action: any) => {
  switch (action.type) {
    case "setBlinkyDegree":
      return action.payload.degree;
    default:
      return state;
  }
};

export default blinkyDirectionReducer;
