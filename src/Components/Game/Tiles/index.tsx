import * as React from "react";
import Tile from "./Tile";
import "./Tiles.css";
import Dot from "../Dot";
import Pacman from "../Pacman";
import Blinky from "../Ghosts/Blinky/Blinky";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { IPacman, IGhost } from "../../../Interfaces";
import { movePlayer } from "../../../Logic/Game/Pacman";
import { counterLogic } from "../../../Logic/Game/Counter";
import { moveGhost } from "../../../Logic/Game/Blinky";
import { checkTurn } from "../../../Logic/Game/Player";
import { RIGHT, LEFT, TOP, BOTTOM } from "../../../constants";
import { setNextDirection } from "../../../Actions/Game/Player";

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
    var nextDirection = 0;
    const interval = setInterval(() => {
      counterLogic(counter, pacman, nextDirection, tiles, blinky, dispatch);
      movePlayer(pacman, tiles, dispatch);
      moveGhost(blinky, tiles, dispatch);
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
        }
        //   else {
        //     dispatch(setNextDirection(pacman.degree));
        //   }
        break;
      case 38:
        e.preventDefault();
        if (checkTurn(pacman, TOP, tiles)) {
          dispatch(setNextDirection(TOP));
        }
        //   else {
        //     dispatch(setNextDirection(pacman.degree));
        //   }
        break;
      case 39:
        e.preventDefault();
        if (checkTurn(pacman, RIGHT, tiles)) {
          dispatch(setNextDirection(RIGHT));
        }
        //   else {
        //     dispatch(setNextDirection(pacman.degree));
        //   }
        break;
      case 40:
        e.preventDefault();
        if (checkTurn(pacman, BOTTOM, tiles)) {
          dispatch(setNextDirection(BOTTOM));
        }
        //   else {
        //     dispatch(setNextDirection(pacman.degree));
        //   }
        break;
    }
  };

  document.addEventListener("keydown", changeDirectionWithKeys, false);

  return (
    <div className="grid">
      {displayGrid}
      <Pacman top={pacman.top} left={pacman.left} degree={pacman.degree} />
      <Blinky top={blinky.top} left={blinky.left} degree={blinky.degree} />
    </div>
  );
}

export default Tiles;
