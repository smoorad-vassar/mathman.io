import { IGhostProps } from "../../../../Interfaces";
import React from "react";
import "../Ghost.css";

function Blinky(props: IGhostProps): JSX.Element {
  return (
    <div
      className="final__ghost"
      style={{ top: props.top + "em", left: props.left + "em" }}
    >
      {/* <div className="final__eyes"></div> */}
    </div>
  );
}

export default Blinky;
