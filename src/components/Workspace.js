//
import Matrix from "./Matrix";
import MatrixEq from "./MatrixEq";
import ToolBox from "./ToolBox";
import styles from "./Matrix.module.css";
import MatrixRow from "./MatrixRow";
import rowStyles from "./MatrixRow.module.css";
import { useEffect, useLayoutEffect, useState } from "react";

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

  const [doingInterchange, updateInterchange] = useState(false);

  const toolbox = [
    {
      name: "Interchange",
      callback: () => {
        //-------------------------------
        //check requirements
        //-------------------------------
        if (!selection[0] || !selection[1]) return;
        updateInterchange(true);
        //-------------------------------
        //Determine offsets
        //-------------------------------
        const A = selection[0];
        const B = selection[1];
        let y0 = A.element.getBoundingClientRect().y;
        let y1 = B.element.getBoundingClientRect().y;
        const dy = y1 > y0 ? y1 - y0 : y0 - y1;
        if (y1 > y0) {
          A["dy"] = -dy;
          B["dy"] = dy;
        } else {
          A["dy"] = dy;
          B["dy"] = -dy;
        }
        //-------------------------------
        //Update Matrix
        //-------------------------------
        const newMatrix = [...matrix];
        const temp = newMatrix[A.id];
        newMatrix[A.id] = newMatrix[B.id];
        newMatrix[B.id] = temp;
        setMatrix(newMatrix);
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
  //-------------------------------
  //Handle Interchange effect
  //-------------------------------
  useEffect(() => {
    // console.log("useEffect: interchange");
    if (!selection[0] || !selection[1] || !doingInterchange) return;
    // console.log("Matrix effect");
    // console.log("A: ", selection[0].dy);
    // console.log("B: ", selection[1].dy);
    selection[0].element.style = `top: ${selection[1].dy}px`;
    selection[1].element.style = `top: ${selection[0].dy}px`;
    selection[0].element.classList.toggle(`${rowStyles.swap}`);
    selection[1].element.classList.toggle(`${rowStyles.swap}`);
    setTimeout(() => {
      selection[0].element.style = `top: ${0}px`;
      selection[1].element.style = `top: ${0}px`;
      setTimeout(() => {
        selection[0].element.removeAttribute("style");
        selection[1].element.removeAttribute("style");
        selection[0].element.classList.toggle(`${rowStyles.swap}`);
        selection[1].element.classList.toggle(`${rowStyles.swap}`);
        setSelection([null, null]);
        setRowSelections([...rowSelection].fill(false));
        updateInterchange(false);
      }, 1000);
    }, 150);
    // return () => {

    // };
  }, matrix);
  //   console.log("render");
  const array = Array(matrix.length).fill(false, 0, matrix.length);
  const [rowSelection, setRowSelections] = useState(array);
  //   const selection = [null, null];
  const [selection, setSelection] = useState([null, null]);

  const selectionCallback = (e, id, i) => {
    // console.log(id == selection[0]["id"]);
    const row = [...rowSelection];
    const sel = [...selection];
    row[i] = !row[i];

    //------------------------------
    //none filled
    //------------------------------
    if (sel[0] === null) {
      sel[0] = { id: id, element: e };
    }
    //------------------------------
    //first filled
    //------------------------------
    else if (sel[0] !== null && sel[1] === null) {
      if (id === sel[0]["id"]) {
        sel[0] = null;
      } else {
        sel[1] = { id: id, element: e };
      }
    }
    //------------------------------
    //both filled
    //------------------------------
    else {
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
