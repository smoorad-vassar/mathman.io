import { eatDot } from "../../Actions/Game/Tiles";
import { moveBlinky, changeBlinkyDirection } from "../../Actions/Game/Blinky";
import { setNextDirection } from "../../Actions/Game/Player";
import BlinkyAStar from "../../Algorithms/Ghosts/Blinky";
import { IPacman, IGhost } from "../../Interfaces";
import Tile from "../../Components/Game/Tiles/Tile";
import { resetCounter } from "../../Actions/Game/Counter";

export const counterLogic = (
  counter: number,
  pacman: IPacman,
  nextDirection: number,
  tiles: Tile[][],
  blinky: IGhost,
  dispatch: any
) => {
  if (counter === 0) {
    if (tiles[pacman.top][pacman.left].state === 2) {
      dispatch(eatDot(pacman.top, pacman.left));
      dispatch(setNextDirection(nextDirection));
    }
    var degree = BlinkyAStar({
      start: tiles[blinky.top][blinky.left],
      tiles: tiles,
      target: tiles[pacman.top][pacman.left],
      blinky: blinky,
    });
    dispatch(changeBlinkyDirection(degree));
  }
  if (counter === 19) {
    dispatch(resetCounter());
  }
  counter++;
};
