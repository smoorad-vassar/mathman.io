import Tile from "./Components/Game/Tiles/Tile";

// should i just change all of these to smth like IGhost?
export interface IPacman {
  top: number;
  left: number;
  degree: number;
}

export interface IGhost {
  top: number;
  left: number;
  degree: number;
}

export interface IPacmanProps {
  top: number;
  left: number;
  degree: number;
}

export interface IGhostProps {
  top: number;
  left: number;
  degree: number;
}

export interface IBlinkyPFProps {
  start: Tile;
  tiles: Tile[][];
  target: Tile;
  blinky: IGhost;
}
