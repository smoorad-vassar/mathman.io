import { moveBlinky } from "../../Actions/Game/Blinky";
import { IGhost } from "../../Interfaces";

export const moveGhost = (blinky: IGhost, dispatch: any) => {
  dispatch(moveBlinky());
};
