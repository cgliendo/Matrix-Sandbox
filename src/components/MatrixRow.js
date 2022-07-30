//

import { useEffect, useLayoutEffect, useState } from 'react';
import styles from './MatrixRow.module.css';
import { createRef } from 'react';
import Fraction from './Fraction';
const MatrixRow = (props) => {
  //   const [selected, setSelection] = useState(false);
  const classes = `${styles.MatrixRow} ${
    props.selected ? styles.selectedA : ''
  }`;

  const ref = createRef();

  const onClickHandler = (e) => {
    props.callback(e.target, props.index, props.index);
  };

  const values = props.values.map((v, i) => (
    // <span key={"value" + i}>
    //   {v.toLocaleString(
    //     undefined, // leave undefined to use the visitor's browser
    //     // locale or a string like 'en-US' to override it.
    //     { maximumFractionDigits: 1 }
    //   )}
    // </span>

    //this key is replicated
    <Fraction key={'fraction' + i} value={v} />
  ));

  return (
    //
    <div
      //   style={{ top: 0 }}
      onClick={(e) => {
        onClickHandler(e);
      }}
      ref={ref}
      className={classes}
    >
      {values}
    </div>
  );
};

export default MatrixRow;
