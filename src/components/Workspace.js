//
import Matrix from "./Matrix";
import MatrixEq from "./MatrixEq";
import ToolBox from "./ToolBox";
import styles from "./Matrix.module.css";
import Modal from "./Modal";
import MatrixRow from "./MatrixRow";
import rowStyles from "./MatrixRow.module.css";
import ModalReplacement from "./ModalReplacement";
import ModalScale from "./ModalScale";
import { useEffect, useLayoutEffect, useState } from "react";
import * as math from "mathjs";

const Workspace = () => {
  // const [matrix, updateMatrix] = useState([
  //   ["1", "2", "3", "4"],
  //   ["2", "3", "4", "5"],
  //   ["3", "4", "5", "6"],
  // ]);
  const [matrix, updateMatrix] = useState([
    [math.fraction(1), math.fraction(2), math.fraction(3), math.fraction(4)],
    [math.fraction(2), math.fraction(3), math.fraction(4), math.fraction(5)],
    [math.fraction(3), math.fraction(4), math.fraction(5), math.fraction(6)],
  ]);

  //-----------------------------------------
  // OPERATION FLAGS
  //-----------------------------------------
  const [doingInterchange, updateInterchange] = useState(false);
  const [doingReplace, updateReplace] = useState(false);
  const [doingScale, updateScale] = useState(false);
  const [displayModal, updateDisplayModal] = useState(false);
  const [displayModalID, updateDisplayModalID] = useState("replacement");
  //-----------------------------------------
  // TOOLBOX BUTTONS AND CALLBACKS
  //-----------------------------------------
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
        updateMatrix(newMatrix);
      },
    },
    {
      name: "Replace",
      callback: () => {
        console.log("replace popup");
        updateDisplayModal(true);
        updateDisplayModalID("replacement");
      },
    },
    {
      name: "Scale",
      callback: () => {
        console.log("scale");
        updateDisplayModal(true);
        updateDisplayModalID("scale");
      },
    },
  ];

  /**
   * Perform Row Replacement
   * @param {*} value Scale factor to multiply by.
   */
  const performReplacement = (value) => {
    if (!selection[0] || !selection[1]) {
      console.log("Need another row");
      return;
    }
    console.log("performing replacement:");
    // console.log("Multiply by", value, "which is a", typeof value);

    const parsedValue = math.fraction(value);
    console.log("Parsed ", parsedValue, "which is a", typeof parsedValue);

    //-----------------------------------------
    // Copy values
    //-----------------------------------------
    let newMatrix = [...matrix];
    let newRow = [...matrix[selection[0].id]];
    //------------------------------------------
    // Perform Row Replacement Operations
    //------------------------------------------
    for (let i = 0; i < newRow.length; i++) {
      //
      console.log("selecetion value", matrix[selection[0].id][i]);
      // math.multiply(selection[0][i]);
      console.log(
        "result",
        math.add(
          math.multiply(matrix[selection[1].id][i], parsedValue),
          matrix[selection[0].id][i]
        )
      );
      newRow[i] = math.add(
        math.multiply(matrix[selection[1].id][i], parsedValue),
        matrix[selection[0].id][i]
      );
    }
    //------------------------------------------
    // Submit Changes
    //------------------------------------------
    newMatrix[selection[0].id] = newRow;
    updateDisplayModal(false);
    selection[0] = null;
    selection[1] = null;
    rowSelection.fill(false);
    updateMatrix(newMatrix);
  };

  const performScale = (value) => {
    // value = "2";
    if (!selection[0]) {
      console.log("Please pick a row");
      return;
    }
    console.log("Perform Scale by", value);
    const parsedValue = math.fraction(value);
    console.log("Parsed ", parsedValue, "which is a", typeof parsedValue);

    //-----------------------------------------
    // Copy values
    //-----------------------------------------
    let newMatrix = [...matrix];
    let newRow = [...matrix[selection[0].id]];
    //------------------------------------------
    // Perform Row Scale Operations
    //------------------------------------------
    for (let i = 0; i < newRow.length; i++) {
      //
      console.log("selecetion value", matrix[selection[0].id][i]);
      // math.multiply(selection[0][i]);
      console.log(
        "result",
        math.multiply(matrix[selection[0].id][i], parsedValue)
      );
      newRow[i] = math.multiply(matrix[selection[0].id][i], parsedValue);
    }
    //------------------------------------------
    // Submit Changes
    //------------------------------------------
    newMatrix[selection[0].id] = newRow;
    updateDisplayModal(false);
    selection[0] = null;
    selection[1] = null;
    rowSelection.fill(false);
    updateMatrix(newMatrix);
  };

  /**
   * Cancel Replacement Operation and close
   * modal window
   */
  const cancelReplacement = () => {
    console.log("performing cancellation");
    updateDisplayModal(false);
  };
  /**
   * Cancel Scale Operation and close
   * modal window
   */
  const cancelScale = () => {
    console.log("performing cancellation");
    updateDisplayModal(false);
  };

  //---------------------------------------------
  // ROW INTERCHANGE ANIMATION EFFECT
  //---------------------------------------------
  useEffect(() => {
    // console.log("useEffect: interchange");
    if (!selection[0] || !selection[1] || !doingInterchange) return;
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
      }, 350);
    }, 150);
    // return () => {
    // };
  }, matrix);

  //---------------------------------------------
  // ROW SELECTION AND HIGHLIGHT FLAGS
  //---------------------------------------------
  const array = Array(matrix.length).fill(false, 0, matrix.length);
  const [rowSelection, setRowSelections] = useState(array);
  const [selection, setSelection] = useState([null, null]);
  //---------------------------------------------
  // HANDLE SELECTION AND HIGHLIGHT
  //---------------------------------------------
  const selectionCallback = (e, id, i) => {
    // console.log(id == selection[0]["id"]);
    const row = [...rowSelection];
    const sel = [...selection];
    row[i] = !row[i];

    //------------------------------
    //Neither are filled
    //------------------------------
    if (sel[0] === null) {
      sel[0] = { id: id, element: e };
    }
    //------------------------------
    //Only one is chosen
    //------------------------------
    else if (sel[0] !== null && sel[1] === null) {
      if (id === sel[0]["id"]) {
        sel[0] = null;
      } else {
        sel[1] = { id: id, element: e };
      }
    }
    //------------------------------
    //Both slots are chosen
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

  //------------------------------
  // RENDER ROWS FOR MATRIX
  //------------------------------
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

  //------------------------------
  // MODAL WINDOWS
  //------------------------------
  const modalWindows = {
    replacement: (
      <ModalReplacement
        A={selection[0]}
        B={selection[1]}
        submit={performReplacement}
        cancel={cancelReplacement}
      ></ModalReplacement>
    ),
    scale: (
      <ModalScale
        submit={performScale}
        cancel={cancelScale}
        display={doingScale}
        A={selection[0]}
        B={selection[1]}
      ></ModalScale>
    ),
  };

  const modalReplacement = <div>hello</div>;
  const modalScale = <div>hello</div>;

  return (
    <>
      <p className="question">
        Reduce the following matrix to <i>Reduced Row Echelon form</i>.
      </p>
      <ToolBox data={toolbox} />
      <Modal display={displayModal} cancel={cancelReplacement}>
        {modalWindows[displayModalID]}
      </Modal>
      <MatrixEq>
        <Matrix>{rows}</Matrix>
      </MatrixEq>
      {/* <p className="prompt">_______ Row __</p> */}
    </>
  );
};

export default Workspace;
