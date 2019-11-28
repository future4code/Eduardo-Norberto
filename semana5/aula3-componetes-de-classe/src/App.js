import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FotoPost from './components/FotoPost/FotoPost';
import CurtirDescurtir from './components/CurtirDescurtir/CurtirDescurtir';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <Header>
        <h2>InstF4</h2>
      </Header>
      <Post>
        <FotoPost
          texto="_eduardo"
          imagem="https://images.unsplash.com/photo-1573433618812-f612e727b7d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
          <div className="barra-botao">
             
          </div>
      </Post>
      <Post>
      <FotoPost
        texto="_eduardo"
        imagem="https://images.unsplash.com/photo-1552154357-aaba12e68e64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      </Post>
      <Post>
      <FotoPost
        texto="_eduardo"
        imagem="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
      </Post>
     
    </div>
  );
}

export default App;
