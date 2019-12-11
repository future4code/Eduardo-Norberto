import React from 'react';
import axios from 'axios';

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
                <li>
                    {this.props.user.name} <button onClick={this.handleOnClickDelete}>X</button>
                </li>
            )
        }
        
}

export default UserListElement;
