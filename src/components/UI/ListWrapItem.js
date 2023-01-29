//Created by bash script
import styles from './ListWrapItem.module.css';

const ListWrapItem = (props) => {
  const classes = `${styles.ListWrapItem} ${
    props.className ? props.className : ''
  }`;
  return <div className={classes}>{props.children}</div>;
};
export default ListWrapItem;
