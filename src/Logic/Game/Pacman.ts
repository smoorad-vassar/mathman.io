import Tile from "../../Components/Game/Tiles/Tile";
import { movePacman, setPacman } from "../../Actions/Game/Pacman";
import { IPacman } from "../../Interfaces";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../constants";
import { HEIGHT, WIDTH } from "../../constants";

export const checkBorders = (pacman: IPacman) => {
  return (
    pacman.top > 0 &&
    pacman.left > 0 &&
    pacman.top < HEIGHT &&
    pacman.left < WIDTH
  );
};

export const checkWall = (pacman: IPacman, tiles: Tile[][]): boolean => {
  if (pacman.top % 1 === 0 && pacman.left % 1 === 0 && checkBorders(pacman)) {
    switch (pacman.degree) {
      case TOP:
        return tiles[pacman.top - 1][pacman.left].state !== 1;
      case LEFT:
        return tiles[pacman.top][pacman.left - 1].state !== 1;
      case BOTTOM:
        return tiles[pacman.top + 1][pacman.left].state !== 1;
      case RIGHT:
        return tiles[pacman.top][pacman.left + 1].state !== 1;
    }
  }
  // clean this mess up later
  let top = pacman.top;
  let left = pacman.left;
  if (pacman.degree === TOP || pacman.degree === LEFT) {
    top = Math.floor(pacman.top);
    left = Math.floor(pacman.left);
  } else if (pacman.degree === RIGHT || pacman.degree === BOTTOM) {
    top = Math.ceil(pacman.top);
    left = Math.ceil(pacman.left);
  }
  if (top === 16 && (left === 14 || left === 15)) {
    return false;
  }
  if ((top === 17 && left === -1) || (top === 17 && left === 30)) {
    return true;
  }
  if (tiles[top][left].state === 1) {
    console.log(pacman.top, pacman.left);
    return false;
  } else {
    return true;
  }
};

export const movePlayer = (pacman: IPacman, dispatch: any) => {
  if (pacman.top === 17 && pacman.left === -0.45 && pacman.degree === LEFT) {
    pacman = {
      top: 17,
      left: 29.5,
      degree: LEFT,
    };
    dispatch(setPacman(pacman));
  } else if (
    pacman.top === 17 &&
    pacman.left === 29.45 &&
    pacman.degree === RIGHT
  ) {
    pacman = {
      top: 17,
      left: -0.5,
      degree: RIGHT,
    };
    dispatch(setPacman(pacman));
  } else {
    dispatch(movePacman());
  }
};
