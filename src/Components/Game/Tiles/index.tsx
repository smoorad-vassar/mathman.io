import * as React from "react";
import Tile from "./Tile";
import "./Tiles.css";
import Dot from "../Dot";
import Pacman from "../Pacman";
import Blinky from "../Ghosts/Blinky/Blinky";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { IPacman, IGhost } from "../../../Interfaces";
import { movePlayer, checkWall } from "../../../Logic/Game/Pacman";
import { counterLogic } from "../../../Logic/Game/Counter";
import { moveGhost } from "../../../Logic/Game/Blinky";
import { checkTurn } from "../../../Logic/Game/Player";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../../constants";
import { setNextDirection } from "../../../Actions/Game/Player";
import { changeDirection } from "../../../Actions/Game/Pacman";

function Tiles(): JSX.Element {
  const tiles: Tile[][] = useSelector(
    (state: RootStateOrAny) => state.tilesReducer
  );
  const dispatch = useDispatch();
  const pacman: IPacman = useSelector(
    (state: RootStateOrAny) => state.pacmanReducer
  );
  const blinky: IGhost = useSelector(
    (state: RootStateOrAny) => state.blinkyReducer
  );
  const counter: number = useSelector(
    (state: RootStateOrAny) => state.counterReducer
  );
  const player: number = useSelector(
    (state: RootStateOrAny) => state.playerReducer
  );
  const blinkyDegree: number = useSelector(
    (state: RootStateOrAny) => state.blinkyReducerDirection
  );

  const displayGrid = tiles.map((tilesRow) => (
    <React.Fragment>
      <React.Fragment>
        {tilesRow.map((tile) => {
          switch (tile.state) {
            case 0:
              return <div className="tile tile_0"></div>;
            case 1:
              return <div className="tile tile_1"></div>;
            case 2:
              return (
                <React.Fragment>
                  <div className="tile tile_2">
                    <Dot />
                  </div>
                </React.Fragment>
              );
            case 3:
              return <div className="tile tile_3"></div>;
          }
        })}
      </React.Fragment>
    </React.Fragment>
  ));

  React.useEffect(() => {
    const interval = setInterval(() => {
      // moveGhost(blinky, tiles, dispatch);
      counterLogic(
        counter,
        pacman,
        player,
        tiles,
        blinky,
        blinkyDegree,
        dispatch
      );
      movePlayer(pacman, tiles, dispatch);
    }, 1000 / 60);
    return () => clearInterval(interval);
  });

  const changeDirectionWithKeys = (e: any) => {
    var { keyCode } = e;

    switch (keyCode) {
      case 37:
        e.preventDefault();
        if (checkTurn(pacman, LEFT, tiles)) {
          dispatch(setNextDirection(LEFT));
        } else {
          dispatch(setNextDirection(player));
        }
        break;
      case 38:
        e.preventDefault();
        if (checkTurn(pacman, TOP, tiles)) {
          dispatch(setNextDirection(TOP));
        } else {
          dispatch(setNextDirection(player));
        }
        break;
      case 39:
        e.preventDefault();
        if (checkTurn(pacman, RIGHT, tiles)) {
          dispatch(setNextDirection(RIGHT));
        } else {
          dispatch(setNextDirection(player));
        }
        break;
      case 40:
        e.preventDefault();
        if (checkTurn(pacman, BOTTOM, tiles)) {
          dispatch(setNextDirection(BOTTOM));
        } else {
          dispatch(setNextDirection(player));
        }
        break;
    }
  };

  document.addEventListener("keydown", changeDirectionWithKeys, false);

  return (
    <div className="grid">
      <Pacman top={pacman.top} left={pacman.left} degree={pacman.degree} />
      {/* <Blinky top={blinky.top} left={blinky.left} degree={blinky.degree} /> */}
      {displayGrid}
    </div>
  );
}

export default Tiles;
