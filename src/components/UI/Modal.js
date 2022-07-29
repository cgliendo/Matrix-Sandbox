import { createRef } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const classes = `${styles.Modal} ${props.display ? "" : styles.disabled}`;
  const style = props.style ? props.style : "";
  return (
    <div style={style} className={classes}>
      {props.children}
    </div>
  );
};
export default Modal;
