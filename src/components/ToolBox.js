//
import styles from "./ToolBox.module.css";
const ToolBox = () => {
  return (
    <div className={styles.ToolBox}>
      <button>Interchange</button>
      <button>Replace</button>
      <button>Scale</button>
    </div>
  );
};

export default ToolBox;
