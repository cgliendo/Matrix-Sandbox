//

import { useState } from "react";
import styles from "./MatrixRow.module.css";

const MatrixRow = (props) => {
  const [selected, setSelection] = useState(false);
  const classes = `${styles.MatrixRow} ${selected && styles.selected}`;

  const values = props.vdata.map((v) => (
    //
    <span>{v}</span>
  ));

  return (
    //
    <p onClick={() => setSelection(!selected)} className={classes}>
      {values}
    </p>
  );
};

export default MatrixRow;
