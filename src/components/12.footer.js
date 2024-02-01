import React from "react";
import Privacy from "./privacy";
import Cookie from "./Cookie";

import LogoVlecvi from "../img/LogoVlecvi.png";
class Footer extends React.Component{
    render(){
        return(
<div >
<table  className="table">
    
    <tr as="tbody">

    <th scope="col"><p className="testSx">
          <nobr>
          <th scope="col"><p><nobr>  <Privacy/>&nbsp;&nbsp;<Cookie/></nobr></p></th>

      </nobr>
          </p></th>
      <th scope="col">
        <p className="testCx">Da Giannino L'angolo D'Abruzzo - Copyright&copy;2024. Tutti i diritti sono riservati.</p>
<p class="vlecvifooter">Designed By <img src={LogoVlecvi} height={"40px"} width={"25px"}/><a class="vlecviname"  href="www.vlecvi.com"> Vlecvi</a></p>
</th>
      <th scope="col"><p className="testDx">
          <nobr>
      <a className="fb" href="https://it-it.facebook.com/angolodabruzzo1/"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
      <a className="ig" href="https://www.instagram.com/angolodabruzzo/"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
      <a className="tree" href="https://linktr.ee/AngoloDabruzzo"><i className="fa fa-tree fa-2x" aria-hidden="true"></i></a>
      </nobr>
          </p></th>
    </tr>
    
  </table>
</div>
        )
    }
}

export default Footer;