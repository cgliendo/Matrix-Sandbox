//
import Matrix from './Matrix';
import MatrixEq from './MatrixEq';
import ToolBox from './ToolBox';
import styles from './Matrix.module.css';
import Modal from './UI/Modal';
import MatrixRow from './MatrixRow';
import rowStyles from './MatrixRow.module.css';
import ModalReplacement from './ModalReplacement';
import ModalScale from './ModalScale';
import ModalCheck from './ModalCheck';
// import { getPerson } from './Hello';

import { useEffect, useLayoutEffect, useState } from 'react';
import * as math from 'mathjs';

const Workspace = () => {
  // getPerson();

  const questions = [
    'Convert the system of equations into a matrix',
    'Reduce the following matrix to Row Echelon form',
    'Reduce the following matrix to Reduced Row Echelon form',
    'How many solutions does this matrix have?',
  ];

  const matrixC = math.matrix([
    [math.fraction(0), math.fraction(2), math.fraction(3)],
    [math.fraction(2), math.fraction(3), math.fraction(4)],
    [math.fraction(1), math.fraction(5), math.fraction(6)],
  ]);

  // console.log(matrixC);

  // const matrixA = [
  //   [math.fraction(0), math.fraction(2), math.fraction(3)],
  //   [math.fraction(2), math.fraction(3), math.fraction(4)],
  //   [math.fraction(1), math.fraction(5), math.fraction(6)],
  // ];

  const [matrix, updateMatrix] = useState(matrixC._data);

  const answer = [
    [math.fraction(1), math.fraction(0), math.fraction(0)],
    [math.fraction(0), math.fraction(1), math.fraction(0)],
    [math.fraction(0), math.fraction(0), math.fraction(1)],
  ];

  const [history, updateHistory] = useState([]);

  const appendHistory = () => {
    // let newHistory = [...history].concat([
    //   [action, value, [{ id: selection[0].id }, { id: selection[1].id }]],
    // ]);
    let newHistory = [...history].concat([matrix]);
    // console.log(newHistory);
    updateHistory(newHistory);
  };

  // console.log(matrix);

  //-----------------------------------------
  // OPERATION FLAGS
  //-----------------------------------------
  const [doingInterchange, updateInterchange] = useState(false);
  const [doingReplace, updateReplace] = useState(false);
  const [doingScale, updateScale] = useState(false);
  const [doingCheck, updateCheck] = useState(true);
  const [displayModal, updateDisplayModal] = useState(false);
  const [displayModalID, updateDisplayModalID] = useState('replacement');
  //-----------------------------------------
  // TOOLBOX BUTTONS AND CALLBACKS
  //-----------------------------------------
  const toolbox = [
    {
      name: 'Undo',
      callback: () => {
        // console.table(history);
        // const [action, value, sel] = history[history.length - 1];
        // selection[0] = sel[0];
        // selection[1] = sel[1];
        // undoAction(action, -value);
        if (history.length === 0) {
          return;
        }
        // console.log(history);
        updateMatrix(history.pop());
      },
    },
    {
      name: 'Swap',
      callback: () => {
        //-------------------------------
        //check requirements
        //-------------------------------
        if (!selection[0] || !selection[1]) return;
        updateInterchange(true);
        appendHistory();
        //-------------------------------
        //Determine offsets
        //-------------------------------
        const A = selection[0];
        const B = selection[1];
        let y0 = A.element.getBoundingClientRect().y;
        let y1 = B.element.getBoundingClientRect().y;
        const dy = y1 > y0 ? y1 - y0 : y0 - y1;
        if (y1 > y0) {
          A['dy'] = -dy;
          B['dy'] = dy;
        } else {
          A['dy'] = dy;
          B['dy'] = -dy;
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
      name: 'Replace',
      callback: () => {
        // console.log("replace popup");
        updateDisplayModal(true);
        updateDisplayModalID('replacement');
      },
    },
    {
      name: 'Scale',
      callback: () => {
        // console.log("scale");
        updateDisplayModal(true);
        updateDisplayModalID('scale');
      },
    },
    {
      name: 'Check',
      callback: () => {
        // console.log("scale");
        // updateDisplayModal(true);
        // updateDisplayModalID("scale");
        updateCheck(true);
        updateDisplayModal(true);
        updateDisplayModalID('check');
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            if (answer[i][j].toString() !== matrix[i][j].toString()) {
              console.log('Mismatch at', i, j);
              console.log(answer[i][j], matrix[i][j]);
              return;
            }
          }
        }
        console.log('CORRECT!');
      },
    },
  ];

  const clearSelection = () => {
    selection[0] = null;
    selection[1] = null;
    rowSelection.fill(false);
  };
  const clearSelectionAndModal = () => {
    updateDisplayModal(false);
    clearSelection();
  };

  const iterateRow = (callback, value) => {
    const parsedValue = math.fraction(value);
    // Copy values
    let newMatrix = [...matrix];
    let newRow = [...matrix[selection[0].id]];
    // Perform Operations
    for (let i = 0; i < newRow.length; i++) {
      newRow[i] = callback(parsedValue, i);
    }
    // Submit Changes
    newMatrix[selection[0].id] = newRow;
    clearSelectionAndModal();
    updateMatrix(newMatrix);
  };

  const actions = {
    replacement: {
      name: 'Replacement',
      meetsReqs: () => selection[0] && selection[1],
      invalidReqMessage: 'Need two rows.',
      callback: (value, i) => {
        return math.fraction(
          math
            .add(
              math.multiply(matrix[selection[1].id][i], value),
              matrix[selection[0].id][i]
            )
            .toString()
        );
      },
      do: function (callback, value) {
        iterateRow(callback, value);
      },
    },
    scale: {
      meetsReqs: () => selection[0],
      invalidReqMessage: 'Need a row.',
      callback: (value, i) => {
        return math.multiply(matrix[selection[0].id][i], value);
      },
      do: function (callback, value) {
        iterateRow(callback, value);
      },
    },
  };

  const doAction = (action, value) => {
    if (!action.meetsReqs()) {
      console.log(action.invalidReqMessage);
      return;
    }
    appendHistory();
    action.do(action.callback, value);
  };

  const undoAction = (action, value) => {
    if (!action.meetsReqs()) {
      console.log(action.invalidReqMessage);
      return;
    }
    // appendHistory(action, value);
    action.do(action.callback, -value);
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
        selection[0].element.removeAttribute('style');
        selection[1].element.removeAttribute('style');
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
      if (id === sel[0]['id']) {
        sel[0] = null;
      } else {
        sel[1] = { id: id, element: e };
      }
    }
    //------------------------------
    //Both slots are chosen
    //------------------------------
    else {
      if (id === sel[0]['id']) {
        sel[0] = sel[1];
        sel[1] = null;
      } else if (id === sel[1]['id']) {
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
      id={'row' + i}
      index={i}
      selected={rowSelection[i]}
      callback={selectionCallback}
      values={row}
    />
  ));

  // console.log(matrixC._data);

  // const rows = matrixC._data.map((row, i) => (
  //   <MatrixRow
  //     key={i}
  //     id={'row' + i}
  //     index={i}
  //     selected={rowSelection[i]}
  //     callback={selectionCallback}
  //     values={row}
  //   />
  // ));

  //------------------------------
  // MODAL WINDOWS
  //------------------------------
  const modalWindows = {
    replacement: (
      <ModalReplacement
        A={selection[0]}
        B={selection[1]}
        submit={(value) => {
          doAction(actions.replacement, value);
        }}
        cancel={clearSelectionAndModal}
      ></ModalReplacement>
    ),
    scale: (
      <ModalScale
        submit={(value) => {
          doAction(actions.scale, value);
        }}
        cancel={clearSelectionAndModal}
        display={doingScale}
        A={selection[0]}
        B={selection[1]}
      ></ModalScale>
    ),
    check: (
      <ModalCheck
        // display={doingCheck}
        submit={clearSelectionAndModal}
      ></ModalCheck>
    ),
  };
  const checkModalColor =
    displayModalID === 'check' ? { backgroundColor: 'greenyellow' } : {};

  return (
    <>
      <p className='question'>
        Reduce the following matrix to <i>Reduced Row Echelon form</i>.
      </p>
      <ToolBox data={toolbox} />
      <Modal
        display={displayModal}
        style={checkModalColor}
        cancel={clearSelectionAndModal}
      >
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
