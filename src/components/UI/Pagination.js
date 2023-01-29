//Created by bash script
import styles from './Pagination.module.css';
import FlexBox from './FlexBox';
import IconButton from './IconButton';
import Paging from './Paging';
import { GrFormPreviousLink } from 'react-icons/gr';
import { GrFormNextLink } from 'react-icons/gr';

const Pagination = (props) => {
  const classes = `${styles.Pagination} ${
    props.className ? props.className : ''
  }`;
  return (
    <div className={classes}>
      <FlexBox justify='space-between'>
        <IconButton onClick={props.prev}>
          <GrFormPreviousLink />
        </IconButton>
        <Paging pages={props.pages} page={props.page} />
        <IconButton onClick={props.next}>
          <GrFormNextLink />
        </IconButton>
      </FlexBox>
    </div>
  );
};
export default Pagination;
