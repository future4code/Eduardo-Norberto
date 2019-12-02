import React from 'react';
import logo from './logo.svg';
import './App.css';
import EtapaUm from './components/EtapaUm/EtapaUm';
import EtapaDois from  './components/EtapaDois/EtapaDois';
import EtapaTres from './components/EtapaTres/EtapaTres';
import EtapaQuatro from './components/EtapaQuatro/EtapaQuatro';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      botaoEtapa: 'um'
    };
  }

  proximaEtapa2 = () => {
    this.setState({ botaoEtapa: 'dois' });
  };

  proximaEtapa3 = () => {
    this.setState({ botaoEtapa: 'tres'})
  };

  proximaEtapa4 = () => {
    this.setState({ botaoEtapa: 'quatro'})
  };

  render () {
    if (this.state.botaoEtapa === 'um') {
        return (
          <div className="App">
            <EtapaUm />
            <button onClick={this.proximaEtapa2}>Próxima etapa</button>
          </div>
        );
      }else if (this.state.botaoEtapa === 'dois'){
        return (
          <div className="App">
            <EtapaDois />
            <button onClick={this.proximaEtapa3}>Próxima etapa</button>
          </div>
        );
      }else if (this.state.botaoEtapa === 'tres'){
        return(
          <div className="App">
            <EtapaTres />
            <button onClick={this.proximaEtapa4}>Próxima etapa</button>
          </div>
        );
      }else {
        return(
          <div className="App">
            <EtapaQuatro />
          </div>
        );
      }
  }
}

export default App;
