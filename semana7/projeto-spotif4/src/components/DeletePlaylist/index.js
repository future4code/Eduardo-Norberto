import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class DeletePlaylist extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            detailPlaylist: []
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

    getPlaylistMusics = async () => {

        const url = `${baseUrl}/playlists/getPlaylistMusics/${this.props.playlist.id}`

        const request = {
            headers: {
                auth: 'eduardo'
            }
        }

        const response = await axios.get(url, request)
        this.setState ({detailPlaylist: response.data.result.musics})

    }

    render(){
        return(
            <div>
                <li onClick={() => this.getPlaylistMusics()}> {this.props.playlist.name} </li><label>Apagar Playlist: </label><button onClick={this.delPlaylist}>X</button>
                <ul>
                {this.state.detailPlaylist.map(detail =>(
                    <li> {detail.artist} - {detail.name}</li> 
                ))}
                </ul>
            </div>
        )
    }
}

export default DeletePlaylist;