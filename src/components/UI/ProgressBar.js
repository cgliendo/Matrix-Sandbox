//Created by bash script
import styles from './ProgressBar.module.css';

const ProgressBar = (props) => {
  const classes = `${styles.ProgressBar} ${
    props.className ? props.className : ''
  }`;
  return (
    <div className={styles.container}>
      <div style={{ width: `${props.percent}%` }} className={classes}></div>
    </div>
  );
};
export default ProgressBar;
