//Created by bash script
import styles from './LinkList.module.css';
import ListWrap from './ListWrap';

const LinkList = (props) => {
  const classes = `${styles.LinkList} ${
    props.className ? props.className : ''
  }`;
  return <ul className={classes}>{props.children}</ul>;
};
export default LinkList;
