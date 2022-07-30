//Created by bash script
import styles from './IconButton.module.css';

const IconButton = (props) => {
  const classes = `${styles.IconButton} ${
    props.className ? props.className : ''
  }`;
  return (
    // <div className={classes}>
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
    // </div>
  );
};
export default IconButton;
