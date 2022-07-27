import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const AnimatedLetters = ({ letterClass, lettersArray, delay }) => (
  <span>
    {lettersArray.map((char, index) => (
      <span
        key={`${char}_${index}`}
        className={`${letterClass} _${index + delay}`}
      >
        {char}
      </span>
    ))}
  </span>
);

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  lettersArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number.isRequired,
};

export default AnimatedLetters;
