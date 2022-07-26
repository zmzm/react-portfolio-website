import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';

import LogogTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
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

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
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
              offset={5}
              lettersArray={nameArray}
              letterClass={letterClass}
            />
            <br />
            <AnimatedLetters
              offset={nameArray.length + 5}
              lettersArray={jobArray}
              letterClass={letterClass}
            />
          </h1>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
