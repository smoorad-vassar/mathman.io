// use memo here with reducers to stop all tiles from
// re rendering every time pacman eats a dot
import Tile from "./Tile";
import { Tiles } from "../../../InitState";

function populateTiles(Tiles: number[][]) {
  var tiles: Tile[][] = [];
  for (var i = 0; i < Tiles.length; i++) {
    tiles.push([]);
    for (var j = 0; j < Tiles[0].length; j++) {
      var tile = new Tile(i, j, Tiles[i][j]);
      tiles[i].push(tile);
    }
  }
  for (var i = 0; i < Tiles.length; i++) {
    for (var j = 0; j < Tiles[0].length; j++) {
      tiles[i][j].calculateNeighbors(tiles);
    }
  }

  return tiles;
}

const tiles = populateTiles(Tiles);

export default tiles;
