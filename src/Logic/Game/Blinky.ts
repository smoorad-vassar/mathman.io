import { checkWall } from "./Pacman";
import { moveBlinky } from "../../Actions/Game/Blinky";
import { IGhost } from "../../Interfaces";
import Tile from "../../Components/Game/Tiles/Tile";

export const moveGhost = (blinky: IGhost, tiles: Tile[][], dispatch: any) => {
  if (checkWall(blinky, blinky.degree, tiles)) {
    dispatch(moveBlinky());
  }
};
