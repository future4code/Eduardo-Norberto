import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class AllPlaylist extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            playlistsList: [],
        }
    }

    getAllPlaylists = async () => {
        
        const request = {
            headers: {  
                auth: 'eduardo',
            }
        }

        const response = await axios.get(
            `${baseUrl}/playlists/getAllPlaylists`,
            request
        );
        
        this.setState({playlistsList: response.data.result.list})
    }

    componentDidMount(){
        this.getAllPlaylists();
    }

    render() {
        return(
            <div>
            
                <h3>Playlists</h3>
                {this.state.playlistsList.map(playlist => (
                <ul>{playlist.name}</ul>
                ))}
            </div>
        )
    }

}
export default AllPlaylist;