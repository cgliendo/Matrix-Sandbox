//
import styles from "./ToolBox.module.css";
const ToolBox = (props) => {
  const buttons = props.data.map((b, i) => (
    <button key={"toolbox" + i} onClick={b.callback}>
      {b.name}
    </button>
  ));

  return <div className={styles.ToolBox}>{buttons}</div>;
};

export default ToolBox;
