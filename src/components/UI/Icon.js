//Created by bash script
import styles from './Icon.module.css';

const Icon = (props) => {
  const classes = `${styles.Icon} ${props.className ? props.className : ''}`;
  return <span className={classes}>{props.children}</span>;
};
export default Icon;
