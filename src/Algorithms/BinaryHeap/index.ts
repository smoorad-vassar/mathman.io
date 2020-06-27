import Tile from "../../Components/Game/Tiles/Tile";

export default class BinaryHeap {
  data: Tile[];
  n: number;

  constructor() {
    this.data = [];
    this.n = 0;
  }

  push(tile: Tile) {
    this.data.push(tile);
    this.n++;
    this.percolateUp();
  }

  pop(): Tile {
    this.n--;
    var rtn = this.data[this.data.length - 1];
    this.data.pop();
    return rtn;
  }

  size() {
    return this.n;
  }

  empty() {
    return this.n === 0;
  }

  percolateUp() {
    var i: number = this.n - 1;
    var temp: Tile;

    while (i > 0 && this.data[i].f > this.data[i - 1].f) {
      temp = this.data[i];
      this.data[i] = this.data[i - 1];
      this.data[i - 1] = temp;
    }
  }
}
