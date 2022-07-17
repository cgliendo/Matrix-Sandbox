//Created by bash script
import { createRef } from "react";
import styles from "./ModalScale.module.css";

const ModalScale = (props) => {
  const classes = `${styles.ModalScale} ${
    props.className ? props.className : ""
  }`;
  const inputRef = createRef();
  return (
    <div className={classes}>
      <input ref={inputRef} defaultValue="2"></input>
      <button
        onClick={() => {
          const value = inputRef.current.value;
          //   console.log("Request Replacement with", value);
          props.submit(value);
        }}
      >
        Scale
      </button>
      <button
        onClick={() => {
          console.log("Request Cancel");
          props.cancel();
        }}
      >
        Cancel
      </button>
    </div>
  );
};
export default ModalScale;
