import React from 'react';
import axios from 'axios';
import styled from 'styled-components'; 
import UserListElement from '../UserListElement/UserListElement'
import UserRegister from '../UserRegister/UserRegister'

const ListArea = styled.div `
  margin: 0 auto;
  width: 400px;
  text-align: center;
  padding: 10px;
`;

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class UserList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        allUsers: [],
    };
  }

  componentDidMount(){
    this.getAllUsers();
  }

  getAllUsers = async () => {

    const request = {
      headers: {
        'api-token': 'eduardo'
      }
    };
    
    const reponse = await axios.get(
        `${baseUrl}/users/getAllUsers`,
        request
    );
    this.setState({
        allUsers: reponse.data.result
    })
  }

  render(){
      return(
          <ListArea>
              <h2>Usuários Cadastrados</h2>
              {this.state.allUsers.map(user =>(
                  <UserListElement user={user} onDeleteUser={this.getAllUsers}/>
              ))}
          </ListArea>
      )
  }
}
export default UserList;