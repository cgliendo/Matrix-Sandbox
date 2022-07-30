//Created by bash script
import styles from './ModalCheck.module.css';
import Button from '../UI/Button';

const ModalCheck = (props) => {
  const classes = `${styles.ModalCheck} ${
    props.className ? props.className : ''
  }`;
  return (
    <div className={classes}>
      <h2 style={{ color: '#212121' }}>Great Job!</h2>
      <Button callback={props.submit}>Next Question</Button>
    </div>
  );
};
export default ModalCheck;
