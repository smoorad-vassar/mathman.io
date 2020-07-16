import BinaryHeap from "../BinaryHeap";
import Tile from "../../Components/Game/Tiles/Tile";
import { IBlinkyPFProps, IPacman, IGhost } from "../../Interfaces";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../constants";

function heuristic(start: Tile, end: Tile) {
  // uses the Manhattan heuristic
  return Math.abs(start.left - end.left) + Math.abs(start.top - end.top);
}
function BlinkyAlgo(blinky: IGhost, pacman: IPacman, tiles: Tile[][]): number {
  var blinkyTop = blinky.top;
  var blinkyLeft = blinky.left;

  switch (blinky.degree) {
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
  var pacmanTop = pacman.top;
  var pacmanLeft = pacman.left;

  switch (pacman.degree) {
    case TOP:
      pacmanTop = Math.floor(pacmanTop);
      break;
    case BOTTOM:
      pacmanTop = Math.ceil(pacmanTop);
      break;
    case LEFT:
      pacmanLeft = Math.floor(pacmanLeft);
      break;
    case RIGHT:
      pacmanLeft = Math.ceil(pacmanLeft);
      break;
  }
  var start = tiles[blinkyTop][blinkyLeft];
  var target = tiles[pacmanTop][pacmanLeft];

  var openSet = new BinaryHeap();

  var cur_tile = start;

  tiles[start.top][start.left].g = 0;
  tiles[start.top][start.left].f = heuristic(cur_tile, target);

  openSet.push(cur_tile);

  while (!openSet.empty()) {
    var current = openSet.pop();
    if (current === target) {
      console.log("this is when you foiund the path");
      var rtn = [];
      rtn.push(current);
      while (current.previous !== start) {
        current = current.previous !== undefined ? current.previous : current;
        rtn.push(current);
      }
      console.log("this should come rihgt after the previous one");
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
      console.log("please don't get printed, ok dw this didn't get printed");
    }
    var neighbors = current.neighbors;
    for (var i = 0; i < neighbors.length; i++) {
      var tempG = current.g + 20;
      if (tempG < neighbors[i].g) {
        neighbors[i].previous = current;
        neighbors[i].g = tempG;
        neighbors[i].f = neighbors[i].g + heuristic(neighbors[i], target);
        if (!includes(openSet, neighbors[i])) {
          openSet.push(neighbors[i]);
        }
      }
    }
  }
  var degree: number;
  var listy = [RIGHT, LEFT, TOP, BOTTOM];
  if (checkWall(tiles, blinky.degree, start)) {
    degree = blinky.degree;
  } else {
    degree = listy[Math.floor(Math.random() * listy.length)];
    while (!checkWall(tiles, degree, start)) {
      degree = listy[Math.floor(Math.random() * listy.length)];
    }
  }
  return degree;
  console.log("this should never be printed");
  return 0;
}
// // to stop oscillation save last move in memory and do until path is valid
// // MIGHT NOT NEED THIS, LOOK LATER IF WE CAN REMOVE THIS

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
  if (tiles[top][left].state !== 1) return true;
  return false;
}

export default BlinkyAlgo;
