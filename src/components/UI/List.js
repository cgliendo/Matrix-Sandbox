import styles from "./List.module.css";

const List = (props) => {
  const items = props.list.map((e, i) => <li key={`list${i}`}>{e}</li>);
  const classes = `${styles.list} ${props.style == "row" && styles.row}`;

  return <ul className={classes}>{items}</ul>;
};
export default List;
