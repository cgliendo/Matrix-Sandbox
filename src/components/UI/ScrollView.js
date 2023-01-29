//Created by bash script
import styles from './ScrollView.module.css';

const ScrollView = (props) => {
  const classes = `${styles.ScrollView} ${
    props.className ? props.className : ''
  }`;
  return <div className={classes}>{props.children}</div>;
};
export default ScrollView;
