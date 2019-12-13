import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class PlaylistMusics extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            detailPlaylist: []
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

    render() {
        return(
            <li onClick={this.getPlaylistMusics}>
                {this.state.detailPlaylist}
            </li>
        )
    }
}

export default PlaylistMusics;