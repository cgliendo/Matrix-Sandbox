//Created by bash script
import styles from "./Octagon.module.css";

const Octagon = (props) => {
  const classes = `${styles.Octagon} ${props.className ? props.className : ""}`;
  return (
    <svg
      //   id="color-fill"
      //   xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="300"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <polygon
        className={styles.Octagon}
        points="300,150 225,280 75,280 0,150 75,20 225,20"
      ></polygon>
    </svg>
  );
};
export default Octagon;
