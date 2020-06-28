import { IPacman } from "../../Interfaces";
import Tile from "../../Components/Game/Tiles/Tile";

export const movePacman = (tiles: Tile[][]) => {
  return {
    type: "move",
    payload: {
      tiles,
    },
  };
};

export const changeDirection = (degree: number, tiles: Tile[][]) => {
  console.log(degree);
  return {
    type: "changeDirectionPacman",
    payload: {
      degree,
      tiles,
    },
  };
};

export const setPacman = (pacman: IPacman) => {
  return {
    type: "set",
    payload: {
      pacman: pacman,
    },
  };
};
