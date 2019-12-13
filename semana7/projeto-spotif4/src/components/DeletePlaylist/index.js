import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class DeletePlaylist extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    delPlaylist = async () => {
        const url = `${baseUrl}/playlists/deletePlaylist?playlistId=${this.props.playlist.id}`

        const request = {
            headers: {
                auth: 'eduardo'
            }
        }

        try {
            await axios.delete(url, request);
            this.props.onDeletePlaylist();
        }catch (error){
            alert(error.message)
        }
    }

    render(){
        return(
            <li>
                {this.props.playlist.name} <button onClick={this.delPlaylist}>X</button>
            </li>
        )
    }
}

export default DeletePlaylist;