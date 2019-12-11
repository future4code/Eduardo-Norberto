import React from 'react';
import axios from 'axios';
import UserDetail from '../UserDetail/UserDetail';
import styled from 'styled-components';

const ListStyle = styled.li `
    text-align: left;
    list-style: none;
`;

const ButtonDel = styled.button `
    color: red;
`;

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

class UserListElement extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    
    handleOnClickDelete = () => {
        const msg = window.confirm("Tem certeza de que deseja deletar?")
            if (msg === true){
                const url = `${baseUrl}/users/deleteUser?id=${this.props.user.id}`;

                const request = {
                    headers: {
                    'api-token': 'eduardo'
                    }
                };

                axios.delete(url, request).then(()=>{
                    this.props.onDeleteUser();
                }); 
            }
        };
        
        render(){
            return(
                <ListStyle>
                     <span onClick={ <UserDetail /> }>{this.props.user.name}</span> <ButtonDel onClick={this.handleOnClickDelete}>X</ButtonDel>
                </ListStyle>
            )
        }
        
}

export default UserListElement;
