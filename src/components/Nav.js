//Created by bash script
import styles from './Nav.module.css';
import { FiMenu } from 'react-icons/fi';

const Nav = (props) => {
  return (
    <header className='Header'>
      <button
        onClick={props.menuCallback}
        style={{
          padding: '0',
          border: '0',
          fontSize: '2rem',
          width: '2rem',
          height: '2rem',
          color: 'white',
        }}
      >
        <FiMenu />
      </button>
    </header>
  );
};
export default Nav;
