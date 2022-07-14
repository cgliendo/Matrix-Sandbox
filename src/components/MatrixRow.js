//

import { useState } from "react";
import styles from "./MatrixRow.module.css";
import { createRef } from "react";
const MatrixRow = (props) => {
  //   const [selected, setSelection] = useState(false);
  const classes = `${styles.MatrixRow} ${
    props.selected ? styles.selected : ""
  }`;

  //   const ref = createRef();

  const onClickHandler = (e) => {
    // setSelection(!selected);
    // console.log(e.clientX, e.clientY);
    // console.log(e.target.getBoundingClientRect());
    // let y0 = 297;
    // let y1 = 368;
    // let dy = y1 - y0;
    // e.target.style = `top: ${dy}px; transition: top 0.25s ease-in-out;`;
    // e.target.style = `top: ${dy}px; transition: top 0.25s ease-out;`;
    // props.callback(e.target, props.index);
    props.callback(e, props.id, props.index);
    // props.callback(props.id, props.index);
  };

  const values = props.values.map((v) => (
    //
    <span>{v}</span>
  ));

  return (
    //
    <p
      onClick={(e) => {
        onClickHandler(e);
      }}
      //   ref={ref}
      className={classes}
    >
      {values}
    </p>
  );
};

export default MatrixRow;
