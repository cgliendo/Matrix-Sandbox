//Created by bash script
import { createRef } from 'react';
import ButtonGroup from '../UI/ButtonGroup';
import Button from '../UI/Button';
import styles from './ModalScale.module.css';

const ModalScale = (props) => {
  const classes = `${styles.ModalScale} ${
    props.className ? props.className : ''
  }`;
  const inputRef = createRef();

  const callbackSubmit = () => {
    const value = inputRef.current.value;
    //   console.log("Request Replacement with", value);
    props.submit(value);
  };

  const callbackCancel = () => {
    console.log('Request Cancel');
    props.cancel();
  };

  return (
    <div className={classes}>
      <input ref={inputRef} defaultValue='2'></input>
      <ButtonGroup>
        <Button callback={callbackCancel}>Cancel</Button>
        <Button callback={callbackSubmit}>Scale</Button>
      </ButtonGroup>
    </div>
  );
};
export default ModalScale;
