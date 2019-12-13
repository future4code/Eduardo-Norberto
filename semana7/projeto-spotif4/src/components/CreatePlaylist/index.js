import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AllPlaylist from '../AllPlaylist'

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class CreatePlaylist extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
        }
    }

    createPlaylistMusic = async () => {
        const data = {
            name: this.state.name
        }

        const request = {
            headers: {  
                auth: 'eduardo'
            }
        }
        try {
            await axios.post(
                `${baseUrl}/playlists/createPlaylist`,
                data,
                request
            );
        }catch (error) {
            alert(error.message)
        }
        

        this.setState({name: ''})
    }

    controlName = event => {
        this.setState({name: event.target.value})
    }

    render() {
        return(
            <div>
                <input onChange={this.controlName} 
                placeholder='Nome da Playlist'
                value={this.state.name}
                />
                <button onClick={this.createPlaylistMusic}>Salvar</button>
                <AllPlaylist />
            </div>
        )
    }
}

export default CreatePlaylist;
