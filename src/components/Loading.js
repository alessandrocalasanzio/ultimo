import React, { useState, useEffect } from 'react';
import '../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoVlecvi from '../img/LogoVlecvi.png';
import { Link } from 'react-router-dom';
import angolo from '../img/angolo.avif';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Cookies from 'js-cookie';
import Fade from 'react-reveal/Fade';

const LoadingContainer = () => {
  
  return (
    <>
      {(
        <div className="sfondoLoading">
          <div align="center">
            <div className="cornice">
              <div className="cornice-inner">
                <Fade duration={9000}>
                  <h1 className="nameload">Benvenuti Da Giannino</h1>
                  <h1 className="nameload">L'Angolo D'Abruzzo</h1>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingContainer;
