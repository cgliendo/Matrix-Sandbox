import styles from "./Matrix.module.css";
// import MatrixRow from "./MatrixRow";

const Matrix = (props) => {
  //
  // const rows = props.data.map((row) => (
  //   //
  //   <MatrixRow vdata={row} />
  // ));
  return (
    //
    <div className={styles.Matrix}>{props.children}</div>
  );
};
export default Matrix;
