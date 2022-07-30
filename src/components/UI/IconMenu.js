//Created by bash script
import styles from './IconMenu.module.css';

const IconMenu = (props) => {
  const classes = `${styles.IconMenu} ${
    props.className ? props.className : ''
  }`;
  return <div className={classes}>{props.children}</div>;
};
export default IconMenu;
