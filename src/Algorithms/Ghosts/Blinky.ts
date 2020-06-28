import BinaryHeap from "../BinaryHeap";
import Tile from "../../Components/Game/Tiles/Tile";
import { IBlinkyPFProps } from "../../Interfaces";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../constants";

function heuristic(start: Tile, end: Tile) {
  // uses the Manhattan heuristic
  return Math.abs(start.left - end.left) + Math.abs(start.top - end.top);
}

export default function BlinkyAStar(props: IBlinkyPFProps): number {
  var openSet = new BinaryHeap();
  var blinkyTop = props.blinky.top;
  var blinkyLeft = props.blinky.left;

  switch (props.blinky.degree) {
    case TOP:
      blinkyTop = Math.floor(blinkyTop);
      break;
    case BOTTOM:
      blinkyTop = Math.ceil(blinkyTop);
      break;
    case LEFT:
      blinkyLeft = Math.floor(blinkyLeft);
      break;
    case RIGHT:
      blinkyLeft = Math.ceil(blinkyLeft);
      break;
  }

  var start = props.start;
  var cur_tile = props.start;
  props.tiles[start.top][start.left].g = 0;
  props.tiles[start.top][start.left].f = heuristic(cur_tile, props.target);

  openSet.push(cur_tile);

  while (!openSet.empty()) {
    var current = openSet.pop();
    if (current === props.target) {
      var rtn = [];
      rtn.push(current);
      while (current.previous !== start) {
        current = current.previous !== undefined ? current.previous : current;
        rtn.push(current);
      }
      var top = rtn[rtn.length - 1].top - blinkyTop;
      var left = rtn[rtn.length - 1].left - blinkyLeft;
      if (top === 1) {
        return BOTTOM;
      } else if (top === -1) {
        return TOP;
      } else if (left === 1) {
        return RIGHT;
      } else if (left === -1) {
        return LEFT;
      }
    }

    var neighbors = current.neighbors;
    for (var i = 0; i < neighbors.length; i++) {
      var tempG = current.g + 20;
      if (tempG < neighbors[i].g) {
        neighbors[i].previous = current;
        neighbors[i].g = tempG;
        neighbors[i].f = neighbors[i].g + heuristic(neighbors[i], props.target);
        if (!includes(openSet, neighbors[i])) {
          openSet.push(neighbors[i]);
        }
      }
    }
  }
  // to stop oscillation save last move in memory and do until path is valid
  // MIGHT NOT NEED THIS, LOOK LATER IF WE CAN REMOVE THIS
  var degree: number;
  var listy = [RIGHT, LEFT, TOP, BOTTOM];
  if (checkWall(props.tiles, props.blinky.degree, start)) {
    degree = props.blinky.degree;
  } else {
    degree = listy[Math.floor(Math.random() * listy.length)];
    while (!checkWall(props.tiles, degree, start)) {
      degree = listy[Math.floor(Math.random() * listy.length)];
    }
  }
  return degree;
}

function includes(bheap: BinaryHeap, tile: Tile): boolean {
  for (var i = 0; i < bheap.data.length; i++) {
    if (bheap.data[i] === tile) {
      return true;
    }
  }
  return false;
}

function checkWall(tiles: Tile[][], degree: number, start: Tile): boolean {
  var top = start.top;
  var left = start.left;
  switch (degree) {
    case RIGHT:
      left += 1;
      break;
    case LEFT:
      left -= 1;
      break;
    case TOP:
      top -= 1;
      break;
    case BOTTOM:
      top += 1;
      break;
  }
  if (top < 0 || left < 0) return false;
  if (top > tiles.length || left > tiles[0].length) return false;
  if (tiles[top][left].state != 1) return true;
  return false;
}
