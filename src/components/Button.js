//Created by bash script
import styles from './Button.module.css';

const Button = (props) => {
    const classes = `${styles.Button} ${props.className? props.className : ''}`;
    return <div className={classes}>Button</div>;
    }
    export default Button;

