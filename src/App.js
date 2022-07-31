import logo from './logo.svg';
import './App.css';
import Button from './components/UI/Button';
import Modal from './components/UI/Modal';
import Workspace from './components/Workspace';
import { useState } from 'react';
import FlexBox from './components/UI/FlexBox';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { FiMenu } from 'react-icons/fi';

function App() {
  const [page, setPage] = useState(0);
  const lessonPages = [
    <div>
      <div style={{ padding: '1rem' }}>
        <h1>Chapter 1</h1>
        <h2>Matrix Notation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>consectetur adipiscing elit</li>
          <li>labore et dolore</li>
          <li>quis nostrud exercitation</li>
          <li>voluptate velit esse</li>
        </ul>
      </div>
    </div>,
    <div>
      <div style={{ padding: '1rem' }}>
        <h2>Section 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
    </div>,
    <div>
      <div style={{ padding: '1rem' }}>
        <h2>Section 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <Workspace />
    </div>,
    <div>
      <div style={{ padding: '1rem' }}>
        <h2>Section 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <Workspace />
      <div style={{ padding: '1rem' }}>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Try it out</Button>
      </div>
    </div>,
    <div style={{ padding: '1rem' }}>
      <h2>Section 4</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Button>Try it out</Button>
    </div>,
  ];

  const paging = (
    <FlexBox gap='0.5rem'>
      {lessonPages.map((e, i) => {
        return <div key={`page${i}`}>{i === page ? '^' : '*'}</div>;
      })}
    </FlexBox>
  );

  return (
    <div className='App'>
      <div
        style={{ position: 'absolute', top: '0', width: '100%' }}
        id='topModal'
      ></div>
      <header className='Header'>
        {/* <GiHamburgerMenu /> */}
        <button
          onClick={() => {
            console.log('Menu');
          }}
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
        {/* <h1>Chapter 1</h1> */}
        {/* <h2>Matrix Notation</h2> */}
      </header>

      <main className='Window'>
        <div className='lesson'>{lessonPages[page]}</div>
        <div
          style={{
            position: 'absolute',
            // justifySelf: 'flex-end',
            bottom: '12px',
          }}
        >
          <FlexBox>
            <Button
              callback={() => {
                page != 0 && setPage(page - 1);
              }}
            >
              Prev
            </Button>
            {paging}
            <Button
              callback={() => {
                page != lessonPages.length - 1 && setPage(page + 1);
              }}
            >
              Next
            </Button>
          </FlexBox>
        </div>
        {/* <Workspace /> */}
      </main>
    </div>
  );
}

export default App;
