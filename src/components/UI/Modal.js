import { createRef, useEffect, useState } from 'react';
import styles from './Modal.module.css';
import Button from './Button';
import FlexBox from './FlexBox';

const Modal = (props) => {
  let classes = `${styles.Modal} ${props.display ? styles.show : styles.hide}`;

  const style = props.style ? props.style : '';
  const buttonStyle = {
    padding: '0',
    margin: '0',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
  };

  // useEffect(() => {}, [props.display]);

  return (
    <div style={style} className={classes}>
      <FlexBox space>
        {props.title}
        <Button style={buttonStyle} callback={props.callback}>
          X
        </Button>
      </FlexBox>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
export default Modal;
