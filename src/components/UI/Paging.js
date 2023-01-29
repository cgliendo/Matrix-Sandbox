//Created by bash script
import styles from './Paging.module.css';
import FlexBox from './FlexBox';
import { BiRadioCircle } from 'react-icons/bi';
import { BiRadioCircleMarked } from 'react-icons/bi';

const Paging = (props) => {
  const classes = `${styles.Paging} ${props.className ? props.className : ''}`;
  const knobs = props.pages.map((e, i) => (
    <span key={`paging${i}`}>
      {i !== props.page ? <BiRadioCircle /> : <BiRadioCircleMarked />}
    </span>
  ));
  return (
    //   <FlexBox className={classes}>
    <div className={classes}>{knobs}</div>
    // </FlexBox>
  );
};
export default Paging;
