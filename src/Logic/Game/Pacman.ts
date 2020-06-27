import Tile from "../../Components/Game/Tiles/Tile";
import { movePacman, setPacman } from "../../Actions/Game/Pacman";
import { resetCounter } from "../../Actions/Game/Counter";
import { IPacman } from "../../Interfaces";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../constants";

export const checkWall = (
  pos: any,
  degree: number,
  tiles: Tile[][]
): boolean => {
  let top = pos.top;
  let left = pos.left;
  if (degree === TOP || degree === LEFT) {
    top = Math.floor(pos.top);
    left = Math.floor(pos.left);
  } else if (degree === RIGHT || degree === BOTTOM) {
    top = Math.ceil(pos.top);
    left = Math.ceil(pos.left);
  }
  if (top === 16 && (left === 14 || left === 15)) {
    return false;
  }
  if ((top === 17 && left === -1) || (top === 17 && left === 30)) {
    return true;
  }
  if (
    top < 0 ||
    top > 34 ||
    left < 0 ||
    left > 29 ||
    tiles[top][left].state === 1
  ) {
    return false;
  } else {
    return true;
  }
};

export const movePlayer = (pacman: IPacman, tiles: Tile[][], dispatch: any) => {
  if (checkWall(pacman, pacman.degree, tiles)) {
    if (pacman.top === 17 && pacman.left === 0) {
      pacman = {
        top: 17,
        left: 29,
        degree: 180,
      };
      dispatch(setPacman(pacman));
      dispatch(resetCounter());
    } else if (pacman.top === 17 && pacman.left === 29) {
      pacman = {
        top: 17,
        left: 0,
        degree: 0,
      };
      setPacman(pacman);
      dispatch(resetCounter());
    } else {
      dispatch(movePacman);
    }
  }
};