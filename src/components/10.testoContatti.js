import React from "react";


import AOS from 'aos';
import 'aos/dist/aos.css';

import Table from 'react-bootstrap/Table';


class TestoContatti extends React.Component {
  

    componentDidMount(){
        AOS.init({
            duration : 500,
            once: true,
            mirror: false
          })
    }
    render() {
        return (


            <Table borderless data-aos="fade-right" data-aos-mirror='false' data-aos-once='true'  >
<tbody>
                <tr className="Asstr" >
                    <th className="photo-grid1 card1-tall card1-wide noPadding">
                        <div className="card2 imgSize1 sfondoContatti1 paddingVia ">Via Rosolino Pilo,20 - Milano
                        </div>
                    </th>
                </tr>
                </tbody>
                <tbody>          
                <tr>
                    <th className="photo-grid1 card1-tall card1-wide noPadding">
                        <div className="card3 imgSize1 sfondoContatti2">Martedi-Domenica:<br /> 12:00/14:30 - 19:30/23:00
                        </div>
                    </th>
                </tr>
                </tbody>  
                <tbody className="Asstr">
                <tr>
                <th className="photo-grid1 card1-tall card1-wide noPadding">
                        <div className="card3 imgSize1 sfondoContatti3">Per info e Prenotazioni:<br /> 02-29406526
                        </div>
                    </th>
                </tr>
                </tbody>
               
             

            </Table>

        )
    }
}

export default TestoContatti;