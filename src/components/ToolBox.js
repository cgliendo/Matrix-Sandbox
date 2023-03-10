//
import styles from './ToolBox.module.css';
const ToolBox = (props) => {
  const buttons = props.data.map((b, i) => (
    <button
      style={b.color ? { backgroundColor: b.color } : {}}
      key={'toolbox' + i}
      onClick={b.callback}
    >
      {b.name}
    </button>
  ));

  return <div className={styles.ToolBox}>{buttons}</div>;
};

export default ToolBox;
