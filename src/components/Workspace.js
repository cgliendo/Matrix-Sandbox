//
import Matrix from "./Matrix";
import MatrixEq from "./MatrixEq";
import ToolBox from "./ToolBox";
// import { Fragment } from "react";

const Workspace = () => {
  const matrix = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ];
  return (
    <>
      <p className="question">Solve the following system of equations.</p>
      <ToolBox />
      <MatrixEq>
        <Matrix data={matrix} />
      </MatrixEq>
      {/* <p className="prompt">_______ Row __</p> */}
    </>
  );
};

export default Workspace;
