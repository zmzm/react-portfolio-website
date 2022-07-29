import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const aboutLetters = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];

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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              delay={7}
              lettersArray={aboutLetters}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don&apos;t hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <div className="info-map">
            Uladzislau Kavalski
            <br />
            Poland
            <br />
            Bialystok
            <br />
            <span>vladislav.kovalskij@gmail.com</span>
          </div>
          <MapContainer center={[53.1325, 23.1688]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[53.14051136649821, 23.1015179831185]}>
              <Popup>Vlad lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
