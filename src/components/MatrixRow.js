//

import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./MatrixRow.module.css";
import { createRef } from "react";
const MatrixRow = (props) => {
  //   const [selected, setSelection] = useState(false);
  const classes = `${styles.MatrixRow} ${
    props.selected ? styles.selected : ""
  }`;

  const ref = createRef();

  const onClickHandler = (e) => {
    props.callback(e.target, props.index, props.index);
  };

  const values = props.values.map((v, i) => (
    <span key={"value" + i}>
      {v.toLocaleString(
        undefined, // leave undefined to use the visitor's browser
        // locale or a string like 'en-US' to override it.
        { maximumFractionDigits: 1 }
      )}
    </span>
  ));

  return (
    //
    <p
      //   style={{ top: 0 }}
      onClick={(e) => {
        onClickHandler(e);
      }}
      ref={ref}
      className={classes}
    >
      {values}
    </p>
  );
};

export default MatrixRow;
