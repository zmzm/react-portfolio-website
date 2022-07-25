import React, { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/dist/DrawSVGPlugin';

import LogoS from '../../../assets/images/logo-s.png';

import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    });
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        src={LogoS}
        ref={solidLogoRef}
        alt="Solid logo"
      />
    </div>
  );
};

export default Logo;
