import pacmanReducer from "./Game/Pacman";
import playerReducer from "./Game/Player";
import tilesReducer from "./Game/Tiles";
import counterReducer from "./Game/Counter";
import blinkyReducer from "./Game/Ghosts/Blinky";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pacmanReducer,
  tilesReducer,
  counterReducer,
  blinkyReducer,
  playerReducer,
});

export default rootReducer;
