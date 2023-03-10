import styles from './Fraction.module.css';
import * as math from 'mathjs';
const Fraction = (props) => {
  // Display the fraction
  const displayFraction = math.format(props.value, {
    fraction: `${props.value.d === 1 ? 'decimal' : 'ratio'}`,
  });

  return <div className={styles.Fraction}>{displayFraction}</div>;
};
export default Fraction;
