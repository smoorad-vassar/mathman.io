export default class Tile {
  top: number;
  left: number;
  state: number;
  neighbors: Tile[];
  f: number;
  g: number;
  previous: Tile | undefined;

  constructor(top: number, left: number, state: number) {
    this.top = top;
    this.left = left;
    this.state = state;
    this.neighbors = [];
    this.f = Infinity;
    this.g = Infinity;
    this.previous = undefined;
  }

  cleanTile(): void {
    this.f = Infinity;
    this.g = Infinity;
    this.previous = undefined;
  }

  calculateNeighbors(tiles: Tile[][]): void {
    if (this.left > 0 && tiles[this.top][this.left - 1].state !== 1) {
      this.neighbors.push(tiles[this.top][this.left - 1]);
    }
    if (
      this.left < tiles[0].length - 1 &&
      tiles[this.top][this.left + 1].state !== 1
    ) {
      this.neighbors.push(tiles[this.top][this.left + 1]);
    }
    if (this.top > 0 && tiles[this.top - 1][this.left].state !== 1) {
      this.neighbors.push(tiles[this.top - 1][this.left]);
    }
    if (
      this.top < tiles.length - 1 &&
      tiles[this.top + 1][this.left].state !== 1
    ) {
      this.neighbors.push(tiles[this.top + 1][this.left]);
    }
  }
}
