//Created by bash script
import styles from './View.module.css';

const View = (props) => {
  const classes = `${styles.View} ${props.className ? props.className : ''}`;
  return (
    <div style={{ height: props.height }} className={classes}>
      {props.children}
    </div>
  );
};
export default View;
