import React from 'react';
import { Link } from 'react-router-dom';

import LogogTitle from '../../assets/images/logo-s.png';

import './index.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi <br /> I&apos;m
          <img alt="developer" src={LogogTitle} />
          lobodan
          <br />
          JS developer
        </h1>
        <Link to="/contact" calssName="flat-butoon">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
