import React from 'react';
import axios from 'axios';
import styled from 'styled-components'; 
import UserList from '../UserList/UserList'

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

class UserRegister extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        name: "",
        email: ""
    };
  }

  

  createUser = async () => {

    const data = {
      name: this.state.name,
      email: this.state.email
    }
    
    const request = {
      headers: {
        'api-token': 'eduardo',
      }
    }
    
    await axios.post(
        `${baseUrl}/users/createUser`,
        data,
        request
    );
    this.setState({
        name: '',
        email: ''
    })
  }
  
  
  
    
  controleNome = event => {
    this.setState ({name: event.target.value});
  }

  controleEmail = event => {
    this.setState ({email: event.target.value});
  }

  

  render(){
    
    return (
        <FormArea>
            <p>Nome:</p><input type="text" onChange={this.controleNome}
            value={this.state.name}
            />
            <p>E-mail:</p><input type="text" onChange={this.controleEmail}
            value={this.state.email}
            />
            <br/>
            <BataoEnviar onClick ={this.createUser}>Salvar</BataoEnviar>
        </FormArea>
    );
  } 
}

export default UserRegister;
