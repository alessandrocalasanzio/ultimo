import React, {useState, useEffect,useRef}  from 'react';
import '../App.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoVlecvi from '../img/LogoVlecvi.png';
import {Link} from 'react-router-dom';
import angolo from '../img/angolo.avif';


import AOS from 'aos';
import 'aos/dist/aos.css';

import Cookies from 'js-cookie';
import Fade from 'react-reveal/Fade';


    
    const LoadingContainer = () => {
      const [loading, setLoading] = useState(true);
      const buttonRef = useRef(null);
    
      useEffect(() => {
        // Check if the cookie exists
        const cookie = Cookies.get('isFirstVisit');
    
        // If the cookie exists, skip the preload
        if (cookie) {
          setLoading(false);
          return;
        }
    
        // Perform the preload
        setTimeout(() => {
          setLoading(false);
        }, 9000);
    
        // Simulate clicking a button after preload
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.click();
          }
        }, 9100);
    
        // Set the isFirstVisit cookie to prevent further preloads
        Cookies.set('isFirstVisit', 'true', { expires: 30 }); // This will expire after 30 days
      }, []);
    
      useEffect(() => {
        AOS.init();
      }, []);

    return(
       <div>


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
 

      </div>

    );
}

export default LoadingContainer;