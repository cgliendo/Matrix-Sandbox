//Created by bash script
import { createRef } from "react";
import styles from "./ModalReplacement.module.css";
import ButtonGroup from "./UI/ButtonGroup";
import Button from "./UI/Button";

const ModalReplacement = (props) => {
  const pre_message = `Replace row ${props.A ? props.A.id + 1 : "___"} with `;
  const post_message = ` times row ${
    props.A ? props.A.id + 1 : "___"
  } plus row ${props.B ? props.B.id + 1 : "____"}. `;
  const classes = `${styles.ModalReplacement} ${
    props.className ? props.className : ""
  }`;
  const inputRef = createRef();

  const callbackSubmit = () => {
    const value = inputRef.current.value;
    console.log("Request Replacement with", value);
    props.submit(value);
  };

  const callbackCancel = () => {
    console.log("Request Cancel");
    props.cancel();
  };

  return (
    <div className={classes}>
      {" "}
      {pre_message}
      <input ref={inputRef} defaultValue=""></input>
      {post_message}
      <ButtonGroup>
        <Button callback={callbackCancel}>Cancel</Button>
        <Button callback={callbackSubmit}>Replace</Button>
      </ButtonGroup>
    </div>
  );
};
export default ModalReplacement;
