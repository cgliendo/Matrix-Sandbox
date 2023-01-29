//Created by bash script
import styles from './StickyFooter.module.css';

const StickyFooter = (props) => {
  //   const classes = `${styles.StickyFooter} ${
  //     props.className ? props.className : ''
  //   }`;
  return (
    <div
      style={{
        width: '100%',
        position: 'fixed',
        bottom: '0px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </div>
  );
};
export default StickyFooter;
