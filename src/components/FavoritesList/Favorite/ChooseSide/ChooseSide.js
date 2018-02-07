import React from "react";

const ChooseSide = props => {
  return (
    <div>
      <button onClick={() => props.handleSide("dark")}>Dark Side</button>
      <button onClick={() => props.handleSide("light")}>Light Side</button>
    </div>
  );
};

export default ChooseSide;
