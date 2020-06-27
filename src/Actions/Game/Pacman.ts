import { IPacman } from "../../Interfaces";

export const movePacman = () => {
  return {
    type: "move",
  };
};

export const changeDirection = (degree: number) => {
  return {
    type: "move",
    payload: {
      degree,
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
