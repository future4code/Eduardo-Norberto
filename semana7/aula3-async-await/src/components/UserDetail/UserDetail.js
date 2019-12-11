import React from 'react';
import axios from 'axios';

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

class UserDetail extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    getUserById = () =>{
        const url = `${baseUrl}/users/getUser/${this.props.user.id}`;

        const data ={
            email: this.props.user.email,
            name: this.props.user.name,
            id: this.props.user.id
        }

    
        const request = axios.post(url, data, {
            headers: {
                'api-token': 'eduardo'
                }
        })
    }

    render(){
        return(
            <div>
                {this.props.result}
            </div>
        )
    }
    
}
export default UserDetail;