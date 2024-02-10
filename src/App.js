import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router,Route,Switch } from "react-router-dom";
import Navbar from './components/1.navbar';
import ScheletroStoria from './components/4.scheletroStoria';
import MenuLista from './components/7.menu';
import GalleriaImmagini from './components/8.galleriaImm';
import Contatti from './components/9.contatti';
import Footer from './components/12.footer';
import Titoli from './components/2.titoli';
import Titoli1 from './components/3.titoli1';
import CookieBanner from './components/cookiebanner';
import Cookie from './components/Cookie.js';

import menu from './img/menu1.jpg';
import pane from './img/bread.jpg';
import carbonara from './img/pasta.jpg';
import carne from './img/carne1.jpg';
import patate from './img/patate.jpg';
import dolci from './img/dolce.jpg';
import frutta from './img/fruit.jpg';
import acqua from './img/bottle.jpg';
import vino from './img/wine.jpg';

import PDF from "./pdf/MenuAngoloDabruzzo.pdf";

import Loading from './components/Loading';
import $ from "jquery";

import AOS from 'aos';
import 'aos/dist/aos.css';


import Cookies from 'js-cookie';


const menus = [
  { id: 0, megatitolo: "ANTIPASTI", titolo: "Capocollo all'Abruzzese :", prezzo: "10", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 1, titolo: "Polpettine d'Agnello all'Abruzzese", prezzo: "8", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 3, titolo: "Frittata alla Campagnola", prezzo: "8", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 4, titolo: "Salame Nostrano", prezzo: "10", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 5, titolo: "Prosciutto Crudo", prezzo: "9", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 5.1, titolo: "Ventricina", prezzo: "10", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 6, titolo: "Bresaola Carpacciata", prezzo: "12", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 7, titolo: "Antipasti Misti della Casa", prezzo: "11", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 8, titolo: "Olive Ascolane", prezzo: "11", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 9, titolo: "Antipasto Sott'olio", prezzo: "10", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 10, titolo: "Crudo al Coltello", prezzo: "11", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 11, titolo: "Burrata", prezzo: "11", sezione: "antipasto", numero: "00", dollaro: "€" },
  { id: 12, titolo: "Bufala", prezzo: "11", sezione: "antipasto", numero: "00", dollaro: "€" },
  {},

  { id: 13, megatitolo: "PRIMI", titolo: "Tris di chitarra, schiaffoni e gnocchi", prezzo: "14", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 14, titolo: "Zuppa di cardi all’Abruzzese", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 18, titolo: "Maccheroni alla chitarra", prezzo: "13", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 19, titolo: "Schiaffoni della cuoca", prezzo: "14", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 21, titolo: "Sagne e fagioli all’Abruzzese", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 22, titolo: "Spaghetti alla d’anunzio", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 23, titolo: "Gnocchetti verdi alla casalinga", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 25, titolo: "Tortellini in brodo", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 28, titolo: "Tagliatelle alla casalinga", prezzo: "13", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 29, titolo: "Gnocchi ai quattro formaggi", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 31, titolo: "Minestrone di verdura", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 32, titolo: "Chitarra alla carbonara", prezzo: "13", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 34, titolo: "Spaghetti aglio, olio e peperoncino", prezzo: "10", sezione: "primo", numero: "00", dollaro: "€" },
  { id: 35, titolo: "Maccheroni e melanzane e ricotta", prezzo: "13", sezione: "primo", numero: "00", dollaro: "€" },

  { id: 37, megatitolo: "SECONDI", titolo: "Agnello e scamorza alla griglia", prezzo: "19", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 38, titolo: "Grigliata mista all’Abruzzese", prezzo: "19", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 42, titolo: "Costolette d’agnello alla scottadito", prezzo: "19", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 43, titolo: "Scamorza Abruzzese alla griglia", prezzo: "12", sezione: "secondo", numero: "50", dollaro: "€" },
  { id: 46, titolo: "Polpettine d’agnello con patate", prezzo: "12", sezione: "secondo", numero: "50", dollaro: "€" },
  { id: 47, titolo: "Vitello tonnato con capperi", prezzo: "13", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 48, titolo: "Carpaccio con grana e rucola", prezzo: "13", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 49, titolo: "Mozzarelline dorate", prezzo: "11", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 55, titolo: "Agnello al forno Abruzzese con patate", prezzo: "19", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 56, titolo: "Arrosticini", prezzo: "13", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 58, titolo: "Tagliata", prezzo: "18/20", sezione: "secondo", numero: "00", dollaro: "€" },
  { id: 58.1, titolo: "Formaggi", prezzo: "5/8", sezione: "secondo", numero: "00", dollaro: "€" },

  {},

  { id: 62, megatitolo: "CONTORNI", titolo: "Patate Fritte", prezzo: "5", sezione: "contorno", numero: "00", dollaro: "€" },
  { id: 63, titolo: "Insalata mista", prezzo: "5", sezione: "contorno", numero: "00", dollaro: "€" },
  { id: 64, titolo: "Insalata di pomodori, finocchi.", prezzo: "5", sezione: "contorno", numero: "00", dollaro: "€" },
  { id: 65, titolo: "Verdura cotta all’olio", prezzo: "5", sezione: "contorno", numero: "00", dollaro: "€" },
  { id: 66, titolo: "Antipasti/verdura al carello", prezzo: "5", sezione: "contorno", numero: "00", dollaro: "€" },
  {},

  { id: 69, megatitolo: "DOLCI", titolo: "Tiramisù", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 70, titolo: "Millefoglie", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 71, titolo: "Gelato crema con amaro Abruzzese", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 72, titolo: "Semifreddo affogato al caffè", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 73, titolo: "Sorbetto al Limone", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 74, titolo: "Sorbetto mela verde", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 75, titolo: "Tartufo", prezzo: "6", sezione: "dolci", numero: "00", dollaro: "€" },
  { id: 77, titolo: "Dolci del giorno con gelato", prezzo: "7", sezione: "dolci", numero: "00", dollaro: "€" },
  {},

  { id: 78, megatitolo: "FRUTTA", titolo: "Frutta di stagione", prezzo: "6/7", sezione: "frutta", numero: "00", dollaro: "€" },
  { id: 79, titolo: "Ananas al Maraschino", prezzo: "6/8", sezione: "frutta", numero: "00", dollaro: "€" },

  { id: 80, megatitolo: "BEVANDE", titolo: "Acqua minerale (75 cl) ", prezzo: "2", sezione: "bevande", numero: "50", dollaro: "€" },
  { id: 81, titolo: "Bibita in lattina", prezzo: "3", sezione: "bevande", numero: "00", dollaro: "€" },
  { id: 82, titolo: "Birra (66 cl)", prezzo: "6", sezione: "bevande", numero: "00", dollaro: "€" },
  {},

  { id: 83, megatitolo: "VINI", titolo: "VINI DELLA CASA IN CARAFFA:1/4 Litro", prezzo: "3", sezione: "vino", numero: "50", dollaro: "€" },
  { id: 85, titolo: "VINI DELLA CASA IN CARAFFA:1/2 Litro", prezzo: "6", sezione: "vino", numero: "50", dollaro: "€" },
  { id: 87, titolo: "VINI DELLA CASA IN CARAFFA:1 Litro", prezzo: "10", sezione: "vino", numero: "50", dollaro: "€" },

  { id: 88, titolo: "Cerasuolo Rosato d’Abruzzo", prezzo: "22/26", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 89, titolo: "Trebbiano d’Abruzzo", prezzo: "22", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 90, titolo: "Montepulciano Jorio", prezzo: "26", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 91, titolo: "Marina Cvetic’", prezzo: "40", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 92, titolo: "Montepulciano Zaccagnini ", prezzo: "22", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 93, titolo: "Montepulciano Masciarelli", prezzo: "22", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 94, titolo: "Montepulciano illuminati", prezzo: "22", sezione: "vino", numero: "00", dollaro: "€" },
  { id: 95, titolo: "Spumante Mionetto", prezzo: "22", sezione: "vino", numero: "00", dollaro: "€" },
];

function App() {

  const [state, setState] = useState(menus);
  const ref = useRef(null);
  const [showCookie, setShowCookie] = useState(false);


  const filtra = (e) => {
    let word = e.target.value;

    if (word === 'All') {
      setState(menus);
    }
    else if (word === 'antipasto') {
      const filtered = menus.filter(menu => menu.sezione === 'antipasto');
      setState(filtered);
    }
    else if (word === 'primo') {
      const filtered = menus.filter(menu => menu.sezione === 'primo');
      setState(filtered);
    }
    else if (word === 'secondo') {
      const filtered = menus.filter(menu => menu.sezione === 'secondo');
      setState(filtered);
    }
    else if (word === 'contorno') {
      const filtered = menus.filter(menu => menu.sezione === 'contorno');
      setState(filtered);
    }
    else if (word === 'dolci') {
      const filtered = menus.filter(menu => menu.sezione === 'dolci');
      setState(filtered);
    }
    else if (word === 'frutta') {
      const filtered = menus.filter(menu => menu.sezione === 'frutta');
      setState(filtered);
    }
    else if (word === 'bevande') {
      const filtered = menus.filter(menu => menu.sezione === 'bevande');
      setState(filtered);
    }
    else if (word === 'vino') {
      const filtered = menus.filter(menu => menu.sezione === 'vino');
      setState(filtered);
    }
  }


  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 9000)
  }, []);



  useEffect(() => {
    setTimeout(() => {
      ref.current.click();
    }, 9100);
  }, []);



  $(function () {
    AOS.init();
  });

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


  return (


    <Router basename={window.location.pathname || ''}>
    
    
      <section id="home"></section>
      
      {loading === true ?
        <Loading /> :
        <div>
         <CookieBanner/>
          <Navbar />
          <section id="chisiamo"> </section>
          <Titoli title="CHI SIAMO" />
          <ScheletroStoria />
          <section id="menu"></section>
          <Titoli1 title="MENU" />
          {/*BOTTONI MENU*/}
          <div className="container-fluid">

            <div className="row photo-grid card1-tall card1-wide">
              <div data-filter="menu" className="cardCompleto imgSize sfondoCompleto sfondoMenuPdf "><a type="button" className="button posTestomenudw" href={PDF} download="MenuAngoloDabruzzo.pdf" style={{ color: "black" }}>SCARICA IL MENU COMPLETO</a></div>
            </div>

            <div className="row photo-grid card1-tall card1-wide">
              <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${pane})` }}><button ref={ref} className="button" onClick={filtra} value="antipasto">ANTIPASTO</button></div>
              <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${carbonara})` }}><button className="button" onClick={filtra} value="primo">PRIMO</button></div>
              <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${carne})` }}><button className="button" onClick={filtra} value="secondo">SECONDO</button></div>
              <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${patate})` }}><button className="button" onClick={filtra} value="contorno">CONTORNO</button></div>

            </div>
            <div className="row photo-grid card1-tall card1-wide">
              <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${dolci})` }}><button className="button" onClick={filtra} value="dolci">DOLCI</button></div>
              <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${frutta})` }}><button className="button" onClick={filtra} value="frutta">FRUTTA</button></div>
              <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${acqua})` }}><button className="button" onClick={filtra} value="bevande">BEVANDE</button></div>
              <div data-filter="menu" className="card1 imgSize" style={{ backgroundImage: `url(${vino})` }}><button className="button" onClick={filtra} value="vino">VINO</button></div>
            </div>
          </div>

          {/*MENU*/}
          <div className='clearfix sfondoMenu'>
            <div className="container-fluid">
              {state.map((menu, index) => (
                <MenuLista key={index} menu={menu} sezione={menu.sezione} />
              ))}
            </div>
          </div>
          <section id="galleria"></section>
          <Titoli title="GALLERIA" />
          <GalleriaImmagini />
          <section id="contatti"></section>
          <Titoli1 title="CONTATTI" />
          <Contatti />
          <div className="container-fluid footer"><Footer /></div>
        </div>
      }
    
    </Router>
  );
}

export default App;
