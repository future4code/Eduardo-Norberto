import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './index.css'

const baseURL = "http://www.boredapi.com/api/activity/";


const DivActivity = styled.div `
    width: 500px;
    height: auto;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid black;
    box-shadow: -6px 6px 6px -3px  rgba(100,100,100,.1);
`;

const DivButton = styled.div `
    padding: 10px;
`;

class BoredAPI extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentActivity: {},
            numberParticipants: ''
        }
    }

    

    getRandomActivity = async () => {
        const url = `${baseURL}?participants=${this.state.numberParticipants}`
        // Usando o axios para bater na API do BoredAPI
        // no endpoint que retorna uma atividade aleatória
        const response = await axios.get(url);
        
        this.setState({ currentActivity: response.data })
    }

    controlNumber = (event) =>{
        this.setState({numberParticipants: event.target.value})
    }

    render() {
        const isSelected = this.state.getRandomActivity !== '';
        return(
            <div>
                <DivButton>
                    <label>Participants: </label>
                    <input type="number" min="0" max="5" value={this.state.numberParticipants} onChange={this.controlNumber}/>
                    <button onClick={this.getRandomActivity}>Select Activity</button>
                </DivButton>
                <DivActivity>
                    <hr />
                    <h3>Activity: { this.state.currentActivity.activity }</h3>
                    <hr />
                    <h3>Category: { this.state.currentActivity.type }</h3>
                    <hr />
                    <h3>Participants: { this.state.currentActivity.participants }</h3>
                    <hr />
                </DivActivity>
            </div>
        )
    }
}

export default BoredAPI;