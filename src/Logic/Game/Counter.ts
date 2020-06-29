import { eatDot } from "../../Actions/Game/Tiles";
import { moveBlinky, changeBlinkyDirection } from "../../Actions/Game/Blinky";
import { setNextDirection } from "../../Actions/Game/Player";
import BlinkyAStar from "../../Algorithms/Ghosts/Blinky";
import { IPacman, IGhost } from "../../Interfaces";
import Tile from "../../Components/Game/Tiles/Tile";
import { incrementCounter, resetCounter } from "../../Actions/Game/Counter";
import { changeDirection } from "../../Actions/Game/Pacman";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../constants";
import { setBlinkyDegree } from "../../Actions/Game/BlinkyDirection";

export const counterLogic = (
  counter: number,
  pacman: IPacman,
  player: number,
  tiles: Tile[][],
  blinky: IGhost,
  blinkyDegree: number,
  dispatch: any
) => {
  dispatch(incrementCounter());
  // try {
  //   if (tiles[pacman.top][pacman.left].state === 2) {
  //     console.log(counter);
  //   }
  // } catch {}
  if (counter === 0) {
    // dispatch(changeBlinkyDirection(blinkyDegree));
    if (tiles[pacman.top][pacman.left].state === 2) {
      dispatch(eatDot(pacman.top, pacman.left));
    }
  }
  // if (counter === 1) {
  //   var pacTop = pacman.top;
  //   var pacLeft = pacman.left;
  //   switch (pacman.degree) {
  //     case TOP:
  //       pacTop = Math.floor(pacTop);
  //       break;
  //     case BOTTOM:
  //       pacTop = Math.ceil(pacTop);
  //       break;
  //     case LEFT:
  //       pacLeft = Math.floor(pacLeft);
  //       break;
  //     case RIGHT:
  //       pacLeft = Math.ceil(pacLeft);
  //       break;
  //   }
  //   var blinkyTop = blinky.top;
  //   var blinkyLeft = blinky.left;
  //   switch (blinky.degree) {
  //     case TOP:
  //       blinkyTop = Math.floor(blinkyTop);
  //       break;
  //     case BOTTOM:
  //       blinkyTop = Math.ceil(blinkyTop);
  //       break;
  //     case LEFT:
  //       blinkyLeft = Math.floor(blinkyLeft);
  //       break;
  //     case RIGHT:
  //       blinkyLeft = Math.ceil(blinkyLeft);
  //       break;
  //   }
  //   var degree = BlinkyAStar({
  //     start: tiles[blinkyTop][blinkyLeft],
  //     tiles: tiles,
  //     target: tiles[pacTop][pacLeft],
  //     blinky: blinky,
  //   });
  //   dispatch(setBlinkyDegree(degree));
  // }
  if (counter === 19) {
    if (player !== pacman.degree) {
      dispatch(changeDirection(player, tiles));
    }
    dispatch(resetCounter());
  }
};
