import React from 'react';
import logo from './logo.svg';
import './App.css';
import './imagem/237-200x200.jpg';
import './imagem/238-200x200.jpg';
import './imagem/239-200x200.jpg';
import './imagem/240-200x200.jpg';
import './imagem/241-200x200.jpg';
import './imagem/242-200x200.jpg';
import './imagem/243-200x200.jpg';
import './imagem/244-200x200.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>FututeTube</h2>
        <input type="text" className="campo-busca"></input><button className="botao-busca">Buscar</button>
      </header>
      <div className="corpo">
        <div className="menu">
          <a href="#">Inicio</a>
          <a href="#">Em Alta</a>
          <a href="#">Inscrições</a>
          <a href="#">Originais</a>
          <a href="#">Biblioteca</a>
          <a href="#">Histórico</a>
        </div>
        <div className="main-container">
          <div id="el" className="item1"><img src={require("./imagem/237-200x200.jpg")}/><p>Media 1</p></div>
          <div id="el" className="item2"><img src={require("./imagem/238-200x200.jpg")}/><p>Media 2</p></div>
          <div id="el" className="item3"><img src={require("./imagem/239-200x200.jpg")}/><p>Media 3</p></div>
          <div id="el" className="item4"><img src={require("./imagem/240-200x200.jpg")}/><p>Media 4</p></div>
          <div id="el" className="item5"><img src={require("./imagem/241-200x200.jpg")}/><p>Media 5</p></div>
          <div id="el" className="item6"><img src={require("./imagem/242-200x200.jpg")}/><p>Media 6</p></div>
          <div id="el" className="item7"><img src={require("./imagem/243-200x200.jpg")}/><p>Media 7</p></div>        
          <div id="el" className="item8"><img src={require("./imagem/244-200x200.jpg")}/><p>Media 8</p></div>
        </div>
      </div>
      <footer className="app-footer">
        <h2>Eu moro no footer</h2>
      </footer>
    </div>
  );
}

export default App;
