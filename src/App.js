// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import lessonPages from './lessons/sampleLesson';
import Pagination from './components/UI/Pagination';
import ProgressBar from './components/UI/ProgressBar';
import View from './components/UI/View';
import Nav from './components/Nav';
import StickyFooter from './components/UI/StickyFooter';
import Button from './components/UI/Button';
import ListWrap from './components/UI/ListWrap';
import ListWrapItem from './components/UI/ListWrapItem';
import LinkList from './components/UI/LinkList';
import LinkListItem from './components/UI/LinkListItem';

function App() {
  const [page, setPage] = useState(0);
  // const { lessonPages } = require('./lessons/sampleLesson');

  const percent = ((page + 1) / lessonPages.length) * 100;

  const paginationProps = {
    prev: () => {
      page !== 0 && setPage(page - 1);
    },
    next: () => {
      page !== lessonPages.length - 1 && setPage(page + 1);
    },
    pages: Array(lessonPages.length).fill(0),
    page: page,
  };

  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className='App'>
      {/* <div
        style={{ position: 'absolute', top: '0', width: '100%' }}
        id='topModal'
      ></div> */}
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'var(--gray900)',
          minHeight: '100vh',
          width: '100%',
          left: `${displayMenu ? '0' : '-5000px'}`,
          transition: 'left 0.25s',
          // overflow: 'hidden',
          zIndex: '10',
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          boxSizing: 'border-box',
          // display: `${displayMenu ? 'flex' : 'none'}`,
        }}
      >
        <Button
          style={{
            padding: '0',
            margin: '0',
            // fontSize: '1rem',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            position: 'absolute',
            right: '1rem',
            fontSize: '2rem',
          }}
          callback={() => {
            setDisplayMenu(false);
          }}
        >
          X
        </Button>
        <div
          style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            // alignContent: 'center',
            // justifyContent: 'center',
            height: '100%',
          }}
        >
          <h1>Matrix Sandbox</h1>
          <LinkList>
            <LinkListItem link={'#'}>Chapter 1</LinkListItem>
            <LinkListItem link={'#'}>Chapter 2</LinkListItem>
            <LinkListItem link={'#'}>Chapter 3</LinkListItem>
            <LinkListItem link={'#'}>Chapter 4</LinkListItem>
            <LinkListItem link={'#'}>Chapter 5</LinkListItem>
            <LinkListItem link={'#'}>Chapter 6</LinkListItem>
            <LinkListItem link={'#'}>Chapter 7</LinkListItem>
            <LinkListItem link={'#'}>Chapter 8</LinkListItem>
            <LinkListItem link={'#'}>Chapter 9</LinkListItem>
            <LinkListItem link={'#'}>Chapter 10</LinkListItem>
            <LinkListItem link={'#'}>Chapter 11</LinkListItem>
            <LinkListItem link={'#'}>Chapter 12</LinkListItem>
          </LinkList>
        </div>
      </div>
      <Nav
        menuCallback={() => {
          setDisplayMenu(true);
        }}
      />
      <main className='Window'>
        <ProgressBar percent={percent} />
        <div
          // style={{
          //   maxHeight: '80vh',
          //   // overflow: 'scroll',
          // }}
          className='lesson'
        >
          {lessonPages[page]}
        </div>
      </main>
      <StickyFooter>
        <Pagination {...paginationProps} />
      </StickyFooter>
    </div>
  );
}

export default App;
