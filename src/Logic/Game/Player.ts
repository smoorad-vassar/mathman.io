import Tile from "../../Components/Game/Tiles/Tile";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../constants";

export const checkTurn = (
  pos: any,
  degree: number,
  tiles: Tile[][]
): boolean => {
  let top = Math.floor(pos.top);
  let left = Math.floor(pos.left);
  if (pos.degree === RIGHT) {
    left += 1;
  } else if (pos.degree === LEFT) {
    left -= 1;
  } else if (pos.degree === TOP) {
    top -= 1;
  } else if (pos.degree === BOTTOM) {
    top += 1;
  }
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
