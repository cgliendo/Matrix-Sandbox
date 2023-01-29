//Created by bash script
import styles from './ListWrap.module.css';

const ListWrap = (props) => {
  const classes = `${styles.ListWrap} ${
    props.className ? props.className : ''
  }`;
  return <ul className={classes}>{props.children}</ul>;
};
export default ListWrap;
