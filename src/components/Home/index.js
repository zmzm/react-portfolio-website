import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LogogTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';

import './index.scss';

const Home = () => {
  const [letterClass] = useState('text-animate');
  const nameArray = ['l', 'a', 'd', 'i', 's', 'l', 'a', 'v'];
  const helloArray = ['H', 'i,'];
  const iArray = ['I', "'m"];
  const jobArray = [
    'J',
    'S',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            offset={1}
            lettersArray={helloArray}
            letterClass={letterClass}
          />
          <br />
          <AnimatedLetters
            offset={helloArray.length + 1}
            lettersArray={iArray}
            letterClass={letterClass}
          />
          <img alt="developer" src={LogogTitle} />
          <AnimatedLetters
            offset={15}
            lettersArray={nameArray}
            letterClass={letterClass}
          />
          <br />
          <AnimatedLetters
            offset={nameArray.length + 15}
            lettersArray={jobArray}
            letterClass={letterClass}
          />
        </h1>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
