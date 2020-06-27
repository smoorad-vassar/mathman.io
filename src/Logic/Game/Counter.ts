import { eatDot } from "../../Actions/Game/Tiles";
import { moveBlinky, changeBlinkyDirection } from "../../Actions/Game/Blinky";
import { setNextDirection } from "../../Actions/Game/Player";
import BlinkyAStar from "../../Algorithms/Ghosts/Blinky";
import { IPacman, IGhost } from "../../Interfaces";
import Tile from "../../Components/Game/Tiles/Tile";
import { incrementCounter, resetCounter } from "../../Actions/Game/Counter";
import { changeDirection } from "../../Actions/Game/Pacman";

export const counterLogic = (
  counter: number,
  pacman: IPacman,
  player: number,
  tiles: Tile[][],
  blinky: IGhost,
  dispatch: any
) => {
  var pacTop = pacman.top;
  var pacLeft = pacman.left;
  var blinkyTop = blinky.top;
  var blinkyLeft = blinky.left;
  // console.log(counter)
  if (counter === 0) {
    // console.log(pacTop, pacLeft);
    // console.log(tiles[pacTop][pacLeft].state);
    if (tiles[pacTop][pacLeft].state === 2) {
      dispatch(eatDot(pacTop, pacLeft));
    }
  }
  if (counter === 0){
    console.log(blinkyTop, blinkyLeft);
    var degree = BlinkyAStar({
      start: tiles[blinkyTop][blinkyLeft],
      tiles: tiles,
      target: tiles[pacTop][pacLeft],
      blinky: blinky,
    });
    dispatch(changeBlinkyDirection(degree));
  }
  dispatch(incrementCounter())
  if (counter === 19) {
    dispatch(changeDirection(player))
    dispatch(resetCounter());
    console.log("wtf");
  }
};
