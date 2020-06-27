import Tile from "../../Components/Game/Tiles/Tile";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../constants";
import { setNextDirection } from "../../Actions/Game/Player";
import { IPacman } from "../../Interfaces";

export const checkTurn = (
  pos: any,
  degree: number,
  tiles: Tile[][]
): boolean => {
  let top = Math.floor(pos.top);
  let left = Math.floor(pos.left);
  if (degree === RIGHT) {
    left += 1;
  } else if (degree === LEFT) {
    left -= 1;
  } else if (degree === TOP) {
    top -= 1;
  } else if (degree === BOTTOM) {
    top += 1;
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

export const changeDirectionWithKeys = (
  e: any,
  pacman: IPacman,
  tiles: Tile[][],
  dispatch: any
) => {
  var { keyCode } = e;
  switch (keyCode) {
    case 37:
      e.preventDefault();
      if (checkTurn(pacman, LEFT, tiles)) {
        dispatch(setNextDirection(LEFT));
      }
      //   else {
      //     dispatch(setNextDirection(pacman.degree));
      //   }
      break;
    case 38:
      e.preventDefault();
      if (checkTurn(pacman, TOP, tiles)) {
        dispatch(setNextDirection(TOP));
      }
      //   else {
      //     dispatch(setNextDirection(pacman.degree));
      //   }
      break;
    case 39:
      e.preventDefault();
      if (checkTurn(pacman, RIGHT, tiles)) {
        dispatch(setNextDirection(RIGHT));
      }
      //   else {
      //     dispatch(setNextDirection(pacman.degree));
      //   }
      break;
    case 40:
      e.preventDefault();
      if (checkTurn(pacman, BOTTOM, tiles)) {
        dispatch(setNextDirection(BOTTOM));
      }
      //   else {
      //     dispatch(setNextDirection(pacman.degree));
      //   }
      break;
  }
};
