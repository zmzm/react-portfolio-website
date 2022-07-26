import React, { useEffect, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';

import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const aboutLetters = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              lettersArray={aboutLetters}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I&apos;m very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I&apos;m quietly confident, naturally curious, and perpetually
            working on improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
