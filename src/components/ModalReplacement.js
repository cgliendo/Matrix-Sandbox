//Created by bash script
import { createRef } from "react";
import styles from "./ModalReplacement.module.css";

const ModalReplacement = (props) => {
  const pre_message = `Replace row ${props.A ? props.A.id + 1 : "___"} with `;
  const post_message = ` times row ${
    props.A ? props.A.id + 1 : "___"
  } plus row ${props.B ? props.B.id + 1 : "____"}. `;
  const classes = `${styles.ModalReplacement} ${
    props.className ? props.className : ""
  }`;
  const inputRef = createRef();

  return (
    <div className={classes}>
      {" "}
      {pre_message}
      <input ref={inputRef} defaultValue="-1/2"></input>
      {post_message}
      <div className={styles.buttons}>
        <button
          onClick={() => {
            const value = inputRef.current.value;
            console.log("Request Replacement with", value);
            props.submit(value);
          }}
        >
          Replace
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
    </div>
  );
};
export default ModalReplacement;
