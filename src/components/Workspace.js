//
import Matrix from "./Matrix";
import MatrixEq from "./MatrixEq";
import ToolBox from "./ToolBox";
import styles from "./Matrix.module.css";
import MatrixRow from "./MatrixRow";
import rowStyles from "./MatrixRow.module.css";
import { useState } from "react";

// import { Fragment } from "react";

const Workspace = () => {
  const matrix = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ];

  const toolbox = [
    {
      name: "Interchange",
      callback: () => {
        console.log("interchange");
      },
    },
    {
      name: "Replace",
      callback: () => {
        console.log("replace");
      },
    },
    {
      name: "Scale",
      callback: () => {
        console.log("scale");
      },
    },
  ];

  const array = Array(matrix.length).fill(false, 0, matrix.length);
  const [rowSelection, setRowSelections] = useState(array);
  //   const selection = [null, null];
  const [selection, setSelection] = useState([null, null]);

  const selectionCallback = (e, id, i) => {
    // console.log(id == selection[0]["id"]);
    const row = [...rowSelection];
    const sel = [...selection];
    row[i] = !row[i];

    if (sel[0] === null) {
      //------------------------------
      //none filled
      //------------------------------
      sel[0] = { id: id, element: e };
    } else if (sel[0] !== null && sel[1] === null) {
      //------------------------------
      //first filled
      //------------------------------
      if (id === sel[0]["id"]) {
        sel[0] = null;
      } else {
        sel[1] = { id: id, element: e };
      }
    } else {
      //------------------------------
      //both filled
      //------------------------------
      if (id === sel[0]["id"]) {
        sel[0] = sel[1];
        sel[1] = null;
      } else if (id === sel[1]["id"]) {
        sel[1] = null;
      } else {
        sel[0] = sel[1] = null;
        row.fill(null);
      }
    }
    setSelection(sel);
    setRowSelections(row);
  };

  const rows = matrix.map((row, i) => (
    <MatrixRow
      key={i}
      id={"row" + i}
      index={i}
      selected={rowSelection[i]}
      callback={selectionCallback}
      values={row}
    />
  ));

  return (
    <>
      <p className="question">Solve the following system of equations.</p>
      <MatrixEq>
        <Matrix>{rows}</Matrix>
      </MatrixEq>
      <ToolBox data={toolbox} />
      {/* <p className="prompt">_______ Row __</p> */}
    </>
  );
};

export default Workspace;
