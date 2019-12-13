import React from 'react';
import axios from 'axios';
import styled from 'styled-components'; 

const ListArea = styled.div `
  margin: 0 auto;
  width: 400px;
  text-align: center;
  padding: 10px;
`;

function ListUser (props){
    
    return(
        <ListArea>
            name:{props.dadosUsuario.name}
            {/* <UserList>
        <h2>Usuários Cadastrados:</h2>
        {this.props.users.map(user => (
          <UserListItem key={user.id}>
            {user.name}{" "}
            <DeleteButton onClick={() => this.props.onDeleteUser(user.id)}>
              X
            </DeleteButton>
          </UserListItem>
        ))}
      </UserList> */}
        </ListArea>
    );
}


export default ListUser;