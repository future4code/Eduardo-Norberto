import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class PlaylistMusics extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            musics: '',
            name: '',
            artist: '',
            url: ''
        }
    }

    addMusicToPlaylist = async () => {

        console.log(this.props.text)

        const url = `${baseUrl}/playlists/addMusicToPlaylist`
        
        const data = {
            playlistId: this.props.text,
            music: {
                name: this.state.name,
                artist: this.state.artist,
                url: this.state.url
            }
            
        }

        const request = {
            headers: {
                auth: 'eduardo'
            }
        }

        await axios.put(url, data, request)
        this.setState ({musics: data})
        console.log(data)
    }

    controlName = event => {
        this.setState ({name: event.target.value})
    }

    controlArtist = event => {
        this.setState ({artist: event.target.value})
    }

    controlUrl = event => {
        this.setState ({url: event.target.value})
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Nome da música" 
                value={this.state.name} onChange={this.controlName}
                />
                <input type="text" placeholder="Nome do Artista" 
                value={this.state.artist} onChange={this.controlArtist}
                />
                <input type="text" placeholder="Url da música" 
                value={this.state.url} onChange={this.controlUrl}
                />
                <button onClick={this.addMusicToPlaylist}>Salvar</button>
            </div>
        )
    }
}

export default PlaylistMusics;