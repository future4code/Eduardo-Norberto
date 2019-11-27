import React from "react";
import "./CurtirDescurtir.css";

function MostraCurtir(mostra) {
  if (mostra) {
    return (
        <div className="container-curtir">
            <img src={require("./favorite-white.svg")}/>
        </div>
    );
  }
}

class CurtirDescurtir extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curtir: false,
      imagem: "./favorite-white.svg"
    };
  }

  aoClicar = () => {
    if (this.state.curtir) {
      this.setState({
        curtir: false,
        textoDoBotao: "./favorite-white.svg"
      });
    } else {
      this.setState({
        curtir: true,
        textoDoBotao: "./favorite.svg"
      });
    }
  };

  render() {
    return (
      <div className="Container">
        <img onClick={this.aoClicar}>{this.state.imagem}</img>
        {MostraCurtir(this.state.curtir)}
      </div>
    );
  }
}

export default CurtirDescurtir;