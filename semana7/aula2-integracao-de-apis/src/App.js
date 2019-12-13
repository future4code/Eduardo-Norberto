import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'; 
import ListUser from './components/ListUser/ListUser'

const FormArea = styled.div `
  border: 1px dotted tomato;
  margin: 0 auto;
  width: 400px;
  text-align: center;
  padding: 10px;
`;

const BataoEnviar = styled.button `
  text-align: center;
  width: 100px;
  margin-top: 15px;
`;

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        allUser: [],
        inputNome: "",
        inputEmail: ""
    };
  }

  getAllUsers = () => {
    const url = `${baseUrl}/users/getAllUsers`;

    const request = axios.get(url, {
      headers: {
        'api-token': 'eduardo'
      }
    });
    
    request.then(response =>{
      console.log(response)
      this.setState({
        allUser: response.data.result
      })
    })
  }

  createUser = () => {
    const url = `${baseUrl}/users/createUser`;

    const data = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    console.log(this.state.inputEmail)
    console.log(this.state.inputNome)
    
    const request = axios.post(url, data, {
      headers: {
        'api-token': 'eduardo',
      }
    })
    
    request.then(response => {
      this.getAllUsers();
      alert('Novo usuário inserido com sucesso')
    }).catch(error => {
      alert(error.message);
    });
  }
  
  componentDidMount(){
    this.getAllUsers();
  }
  
    
  controleNome = event => {
    this.setState ({inputNome: event.target.value});
  }

  controleEmail = event => {
    this.setState ({inputEmail: event.target.value});
  }

  pageListUsers = () =>{
    window.location='./components/ListUser/ListUser'
  }


  render(){
    const listAllUsers = this.state.allUser.map(usuario =>{
      return <ListUser dadosUsuario={usuario}/>
    })
    return (
      <div>
        <div>
          <BataoEnviar onClick={this.pageListUsers}>Lista de Usuários</BataoEnviar>
        </div>
        <FormArea>
            <p>Nome:</p><input type="text" onChange={this.controleNome}
            value={this.state.inputNome}
            />
            <p>E-mail:</p><input type="text" onChange={this.controleEmail}
            value={this.state.inputEmail}
            />
            <br/>
            <BataoEnviar onClick ={this.createUser}>Salvar</BataoEnviar>
        </FormArea>
      </div>
    );
  } 
}

export default App;
