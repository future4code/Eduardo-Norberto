import React, { Component } from "react";
import styled from "styled-components";
import DenseAppBar from "../DenseAppBar"
import { connect } from "react-redux";
import {  goBack } from "connected-react-router";
import FooterApp from "../FooterApp";
import Typography from '@material-ui/core/Typography';
import { Grid }  from "@material-ui/core";
import { getTripDetail } from '../../actions'




const DivMain = styled.section`
    height: 600px;
`;

class TripAdmin extends Component{


    componentDidMount() {
        this.props.fecthTrips();
    }
    
    render(){
        const { goToHome, fecthTrips } = this.props
        
        console.log(this.props)
        return(
            <div>
                 <DenseAppBar />
                    <DivMain>
                        <Typography component="h4" variant="h4">Gerenciar Detalhes de lista:</Typography>
                        <Typography component="h6" variant="h6">Lista Detalhada:</Typography>
                        
                            {/* <div>
                               
                                
                                {this.props.trips.map(trip =>(
                                    <div>
                                    <p>{trip.id}</p>
                                    <p> {trip.planet}</p>
                                    <p> {trip.durationInDays}</p>
                                    <p> {trip.date}</p>
                                    <p> {trip.name}</p>
                                    <p> {trip.description}</p>
                                    </div>
                                    ))}
                                
                                
                            </div> */}
                    </DivMain>
                 <FooterApp />
            </div>
        )
    }
}

const mapStateToProps = state =>({
        trips: state.trips.tripsDetails  
})

const mapDispatchToProps = (dispatch) =>({
        goToHome: () => dispatch(goBack("/")),
        fecthTrips: () => dispatch(getTripDetail()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TripAdmin);