//Created by bash script
import styles from './Header.module.css';

const Header = (props) => {
    const classes = `${styles.Header} ${props.className? props.className : ''}`;
    return <div className={classes}>Header</div>;
    }
    export default Header;

