import styles from './FlexBox.module.css';
const FlexBox = (props) => {
  let classes = `${styles.FlexBox}`;
  let finalStyle = {};

  // classes = props.space ? (classes += ` ${styles.space}`) : '';
  props.space && (classes = `${classes} ${styles.space}`);
  props.gap && (finalStyle.gap = props.gap);
  props.justify && (finalStyle.justifyContent = props.justify);

  return (
    <div style={finalStyle} className={classes}>
      {props.children}
    </div>
  );
};
export default FlexBox;
