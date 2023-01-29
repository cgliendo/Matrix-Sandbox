import Button from '../components/UI/Button';
import Workspace from '../components/Workspace';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { MdCheckBox } from 'react-icons/md';
import { BiTargetLock } from 'react-icons/bi';
import ListWrap from '../components/UI/ListWrap';
import Icon from '../components/UI/Icon';
import ListWrapItem from '../components/UI/ListWrapItem';

const lessonPages = [
  //Initial Page - Objectives
  <div>
    <div style={{ padding: '1rem' }}>
      <h1>Chapter 1</h1>
      <h2>Matrix Notation</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h3>
        <Icon>
          <BiTargetLock />
        </Icon>
        Learning Objectives
      </h3>
      <ListWrap>
        <ListWrapItem>
          <Icon>
            <MdCheckBox />
          </Icon>
          consectetur adipiscing elit
        </ListWrapItem>
        <ListWrapItem>
          <Icon>
            <MdCheckBox />
          </Icon>
          labore et dolore
        </ListWrapItem>
        <ListWrapItem>
          <Icon>
            <MdCheckBoxOutlineBlank />
          </Icon>
          quis nostrud exercitation
        </ListWrapItem>
        <ListWrapItem>
          <Icon>
            <MdCheckBoxOutlineBlank />
          </Icon>
          voluptate velit esse
        </ListWrapItem>
      </ListWrap>
    </div>
  </div>,
  //Page
  <div>
    <div style={{ padding: '1rem' }}>
      <h2>Section 1</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
    </div>
  </div>,
  //Page
  <div>
    <div style={{ padding: '1rem' }}>
      <h2>Section 2</h2>
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
    </div>
    <Workspace />
  </div>,
  //Page
  <div>
    <div style={{ padding: '1rem' }}>
      <h2>Section 3</h2>
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
    </div>
    <Workspace />
    <div style={{ padding: '1rem' }}>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <Button>Try it out</Button>
    </div>
  </div>,
  // Page
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
  //Finish Lesson - always here
  <div style={{ padding: '1rem' }}>
    <h1>All Done!</h1>
    <h2>Great Job!</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <Button>Finish Lesson</Button>
  </div>,
];

export default lessonPages;
