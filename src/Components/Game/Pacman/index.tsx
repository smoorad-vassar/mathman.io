import { IPacmanProps } from "../../../Interfaces";
import React from "react";

function Pacman(props: IPacmanProps): JSX.Element {
  return (
    <div
      className={"final__pacman final__pacman_" + props.degree}
      style={{ top: props.top + "em", left: props.left + "em" }}
    ></div>
  );
}

export default Pacman;
