//Created by bash script
import styles from "./ButtonGroup.module.css";

const ButtonGroup = (props) => {
  const classes = `${styles.ButtonGroup} ${
    props.className ? props.className : ""
  }`;
  return <div className={classes}>{props.children}</div>;
};
export default ButtonGroup;
