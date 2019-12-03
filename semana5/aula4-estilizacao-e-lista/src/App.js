import React from 'react';
import './App.css';
import styled from 'styled-components';
import FormPost from './components/FormPost/FormPost'
import Header from './components/Header/Header';
import FotoPost from './components/FotoPost/FotoPost';
import Post from './components/Post/Post';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [
        {nomeUser: "eduardo", urlPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcvjounjclwtHd3EPs7AqpkwAOsdkx32YwL34VbOtreDTTmys&s", urlPost: "https://images.unsplash.com/photo-1573433618812-f612e727b7d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
        {nomeUser: "eduardo", urlPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcvjounjclwtHd3EPs7AqpkwAOsdkx32YwL34VbOtreDTTmys&s", urlPost: "https://images.unsplash.com/photo-1552154357-aaba12e68e64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {nomeUser: "eduardo", urlPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcvjounjclwtHd3EPs7AqpkwAOsdkx32YwL34VbOtreDTTmys&s", urlPost: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
      ]
    };
  }
  aoSalvar = nomeUser =>{
    const novoArray = [...this.state.postArray];
    this.setState({ 
    postArray:novoArray 
  })
  };
  
  
  render(){
  
  return (
    <div className="App">
      <Header>
        <h2>InstF4</h2>
        <FormPost />
      </Header>
      
    </div>
  );
  }
}

export default App;
