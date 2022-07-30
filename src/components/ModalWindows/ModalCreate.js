//Created by bash script
import styles from './ModalCreate.module.css';
import Button from '../UI/Button';
import { createRef } from 'react';
import * as math from 'mathjs';

const ModalCreate = (props) => {
  const classes = `${styles.ModalCreate} ${
    props.className ? props.className : ''
  }`;

  const ref = createRef();

  const handleParse = () => {
    console.log(ref.current.value);
    const val = '' + ref.current.value;
    let result = [];
    val.split('\n').forEach((row) => {
      let temp = row.split(' ');
      temp = temp.map((v) => math.fraction(v));
      result = result.concat([temp]);
    });
    console.log(result);
    const parsedMatrix = math.matrix(result);
    console.log(parsedMatrix.toString());
    props.callback(parsedMatrix);
  };

  return (
    <div className={classes}>
      <textarea
        ref={ref}
        rows='8'
        cols='10'
        style={{
          maxHeight: '200px',
          maxWidth: '300px',
          textAlign: 'center',
          fontSize: '1.5rem',
        }}
      ></textarea>
      <Button callback={handleParse}>Create Matrix</Button>
    </div>
  );
};
export default ModalCreate;
