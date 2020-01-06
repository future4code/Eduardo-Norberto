import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DeletePlaylist from '../DeletePlaylist'

const DivAllPlaylist = styled.div `
    list-style: none;
    padding: 10px;
    text-align: left;
    font-family: Helvetica, sans-serif;
`;

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
            <DivAllPlaylist>
            
                <h3>Playlists</h3>
                <h6>Click na playlist!!!</h6>
                {this.state.playlistsList.map(playlist => (
                <DeletePlaylist playlist={playlist} onDeletePlaylist={this.getAllPlaylists} />
                ))}
                

            </DivAllPlaylist>
        )
    }

}
export default AllPlaylist;