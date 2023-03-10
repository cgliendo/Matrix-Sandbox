//Created by bash script
import styles from './Button.module.css';

const Button = (props) => {
  const callback = props.callback
    ? props.callback
    : () => {
        console.log('Implement Me!');
      };
  // const isDisabled = props.disabled ? 'disabled' : '';
  const classes = `${styles.Button} ${props.className ? props.className : ''}`;
  return (
    <button style={props.style} onClick={callback} className={classes}>
      {props.children}
    </button>
  );
};
export default Button;
