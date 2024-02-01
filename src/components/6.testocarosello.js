import React from "react";


import GalleriaLogo from "./galleriaLogo";

class Testocarosello extends React.Component {


    render() {

        return (
            <div className="centro">
   
                <h3 className="storia">
                    A due passi da Porta Venezia,<b>l'Angolo d'Abruzzo</b> gestito dalla famiglia <b>Calasanzio</b> dal 1965, anno della sua fondazione
                    propone piatti e vini ispirati dalla bellissima terra da cui prende il nome il locale:l'<b>Abruzzo.</b><br/><br/>

                    Tris di chitarra, schiaffoni e gnocchi, Agnello al forno all’Abruzzese con patate e gli immancabili Arrosticini sono solo alcuni dei piatti che ci hanno permesso negli anni
                    di farci conoscere a livello nazionale, riuscendo ad approdare nelle migliori guide culinarie.<br/><br/>
                    Fondato con  dedizione dal padre e tramandato con passione a <b>Giannino</b> e <b>Franco</b>, l'Angolo d'Abruzzo offre ai nostri ospiti un assaggio autentico della ricchezza gastronomica dell'Abruzzo.<br/>
                    Clicca sull'immagine per vedere cosa dicono di noi:
                    <GalleriaLogo/>

                    La forte passione e dedizione che ci contraddistingue hanno permesso inoltre di espandere il nostro marchio 
                    con l'apertura dell'<a href="https://www.facebook.com/angolodabruzzo2/?locale=it_IT">Angolo d'Abruzzo 2(Via Padova,163)</a><i class="fa fa-external-link" aria-hidden="true"></i>, a Torino con <a href="https://dagianninolangolodabruzzo.com/">"l'Angolo d'Abruzzo a Torino"(Via Carlo Botta,10)</a><i class="fa fa-external-link" aria-hidden="true"></i> e di nuovo a Milano con <a href="https://www.dagianninolangolodabruzzo3.it/">"L'Angolo d'Abruzzo 3" in Via Savona 93</a><i class="fa fa-external-link" aria-hidden="true"></i>.
                </h3>
       
            </div>
        );
    }
}

export default Testocarosello;