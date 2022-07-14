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
  //   const matrix = [
  //     [1, 2, 3, 4],
  //     [2, 3, 4, 5],
  //     [3, 4, 5, 6],
  //   ];

  const [matrix, setMatrix] = useState([
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ]);
  const toolbox = [
    {
      name: "Interchange",
      callback: () => {
        console.log("interchange");
        console.log(selection);
        const A = selection[0].element;
        const B = selection[1].element;
        let y0 = A.getBoundingClientRect().y;
        let y1 = B.getBoundingClientRect().y;
        // console.log(y0, y1, y1 - y0, y0 - y1);
        const dy = y1 - y0;
        A.classList.toggle(`${rowStyles.moving}`);
        B.classList.toggle(`${rowStyles.moving}`);
        A.style = `top: ${dy}px`;
        B.style = `top: -${dy}px`;
        setTimeout(() => {
          setSelection([null, null]);
          setRowSelections([...rowSelection].fill(false));
          const newMatrix = [...matrix];
          const temp = newMatrix[0];
          newMatrix[0] = newMatrix[1];
          newMatrix[1] = temp;
          setMatrix(newMatrix);
          A.classList.toggle(`${rowStyles.moving}`);
          B.classList.toggle(`${rowStyles.moving}`);
          A.style = "";
          B.style = "";
        }, 1000);
        // A.style = "";
        // B.style = "";
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
