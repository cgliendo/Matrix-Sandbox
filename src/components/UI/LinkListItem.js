//Created by bash script
import styles from './LinkListItem.module.css';
// import ListWrapItem from './ListWrapItem';

const LinkListItem = (props) => {
  const classes = `${styles.LinkListItem} ${
    props.className ? props.className : ''
  }`;
  return (
    <a href={props.link} className={classes}>
      <li>{props.children}</li>
    </a>
  );
};
export default LinkListItem;
