import React from "react";

import { Table } from "react-bootstrap";


class MenuLista extends React.Component {

  
  render() {
    return (

      <div >
      <h1 className="megCentrato">{this.props.menu.megatitolo}</h1>

      <Table borderless  className="responsive1 filterDiv">
        <thead>
          <tr>
            <th className="card-title"  ><nobr>{this.props.menu.titolo}</nobr></th>
            <th style={{ textAlign: "right" }} className="top">{this.props.menu.dollaro}{this.props.menu.prezzo}<sup>&nbsp;{this.props.menu.numero}</sup></th>
          </tr>
        </thead>
      </Table>
    </div>

    )
  }
}

export default MenuLista;