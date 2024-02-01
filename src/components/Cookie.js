import React from "react";
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

function Privacy() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);


    return ( 
        <>
        <a className="coloreCookie"  type="button" variant="primary" onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={faCookieBite} size="2x"  />      
         </a>
  
   

        <Modal
          
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w fade-left"
          aria-labelledby="example-custom-modal-styling-title"
          animation={true}
        >
        
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Cookie Policy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >

            <p>
            <h3>POLICY SUI COOKIE</h3>
Il nostro sito utilizza esclusivamente cookie tecnici e funzionali, senza alcuna forma di interazione, pubblicità, o profilazione degli utenti. Questi cookie sono essenziali per garantire il corretto funzionamento del sito e migliorare l'esperienza di navigazione.
</p>

<p className="testoCookie">
<h3>COSA SONO I COOKIE</h3>
I cookie sono piccoli file di testo posizionati automaticamente nel browser dell'utente durante la navigazione. Nel nostro caso, utilizziamo solo cookie tecnici e funzionali che non richiedono il tuo consenso esplicito.
</p>

<p className="testoCookie">
<h3>COOKIE TECNICI</h3>
Necessari al Funzionamento:
Mantengono la sessione utente attiva, evitando accessi ripetuti.
Statistici e di Misurazione dell'Audience:
Raccolgono dati anonimi sull'utilizzo del sito, senza identificare singoli utenti.
</p>

<p className="testoCookie">
<h3>COOKIE FUNZIONALI</h3>
Consentono di memorizzare le preferenze selezionate, come la lingua del sito. Il tuo consenso esplicito è richiesto, ma la mancata accettazione di questi cookie non compromette l'accesso al sito.
</p>

<p className="testoCookie">
<h3>CONSENSO E GESTIONE</h3>
Per gestire le tue preferenze sui cookie, utilizza i comandi nel popup banner. Puoi modificare o revocare il consenso in qualsiasi momento cliccando sull'icona di accesso alla gestione dei cookie, situata in basso a sinistra del sito.
</p>

<p className="testoCookie">
<h3>RINGRAZIAMENTO</h3>
Grazie per la tua comprensione e per la tua attenzione alla nostra politica sui cookie.
</p>
          </Modal.Body>
        </Modal>
  
      </>
    );
  }


  export default Privacy;