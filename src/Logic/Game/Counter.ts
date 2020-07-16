import { eatDot, clearAllTiles } from "../../Actions/Game/Tiles";
import { changeBlinkyDirection, moveBlinky } from "../../Actions/Game/Blinky";
import BlinkyAlgo from "../../Algorithms/Ghosts/Blinky";
import { IPacman, IGhost } from "../../Interfaces";
import Tile from "../../Components/Game/Tiles/Tile";
import { incrementCounter, resetCounter } from "../../Actions/Game/Counter";
import { changePacmanDirection } from "../../Actions/Game/Pacman";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../constants";
import { setBlinkyDegree } from "../../Actions/Game/BlinkyDirection";
import { movePlayer, checkWall } from "./Pacman";
import { moveGhost } from "./Blinky";
import { checkTurn } from "./Player";

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
  if (counter === 0) {
    if (tiles[pacman.top][pacman.left].state === 2) {
      dispatch(eatDot(pacman.top, pacman.left));
    }
    dispatch(clearAllTiles());
  }
  if (counter === 1) {
    var deg = BlinkyAlgo(blinky, pacman, tiles);
    console.log("deg", deg, blinky.top, blinky.left);
    if (checkTurn(blinky, deg, tiles)) {
      dispatch(setBlinkyDegree(deg));
    }
  }
  if (counter === 20) {
    if (player !== pacman.degree) {
      // remove tiles from here
      dispatch(changePacmanDirection(player, tiles));
    }
    if (blinkyDegree !== blinky.degree) {
      dispatch(changeBlinkyDirection(blinkyDegree));
    }
    dispatch(resetCounter());
  } else {
    if (checkWall(pacman, tiles)) {
      movePlayer(pacman, dispatch);
    }
    if (checkWall(blinky, tiles)) {
      // console.log(blinky.degree);
      moveGhost(blinky, dispatch);
    }
  }
};
