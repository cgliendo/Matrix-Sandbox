//Created by bash script
import styles from "./Button.module.css";

const Button = (props) => {
  const callback = props.callback
    ? props.callback
    : () => {
        console.log("Implement Me!");
      };
  const classes = `${styles.Button} ${props.className ? props.className : ""}`;
  return (
    <button onClick={callback} className={classes}>
      {props.children}
    </button>
  );
};
export default Button;
