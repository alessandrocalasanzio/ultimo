import  React from "react";
import Mappa from "./11.mappa";
import TestoContatti from "./10.testoContatti";

class Contatti extends React.Component{
    render(){
        return(
            <div className="col-container">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-6 marginColonna">
                        <TestoContatti/>
                    </div>
                    <div className="col-6 marginColonna">
                        <Mappa/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Contatti;