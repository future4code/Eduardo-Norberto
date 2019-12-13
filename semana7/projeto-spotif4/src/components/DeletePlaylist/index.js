import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlaylistMusics from '../PlaylistMusics'

const PlaylistLi = styled.li `
    padding: 10px;
    font-weight: bold;
`;

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class DeletePlaylist extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            detailPlaylist: [],
            currentPage: 'add'
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

    handleChangePage = () => {
        if (this.state.currentPage === 'add'){
            this.setState({currentPage: 'normal'})
        }else {
        this.setState ({currentPage: 'add'})
        }
    }

    render(){
        return(
            <div>
                <PlaylistLi onClick={() => this.getPlaylistMusics()}> {this.props.playlist.name} </PlaylistLi>
                <label>Apagar Playlist: </label><button onClick={this.delPlaylist}>X</button>
                <label>Adicionar Música</label><button onClick={this.handleChangePage}>O</button>
                {this.state.currentPage === 'normal' ? <PlaylistMusics  text={this.props.playlist.id}/> : null}
                <ul>
                {this.state.detailPlaylist.map(detail =>(
                    <li> {detail.artist} - {detail.name} <audio src={detail.url} controls/></li> 
                ))}
                
                </ul>
            </div>
        )
    }
}

export default DeletePlaylist;