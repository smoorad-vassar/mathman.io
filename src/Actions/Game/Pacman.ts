import { IPacman } from "../../Interfaces";
import Tile from "../../Components/Game/Tiles/Tile";

export const movePacman = () => {
  return {
    type: "move",
  };
};

export const changePacmanDirection = (degree: number, tiles: Tile[][]) => {
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
