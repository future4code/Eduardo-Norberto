import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { getAllTrips } from  "../../actions";
import DenseAppBar from '../DenseAppBar'


class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {
    this.props.fecthTrips();
  }

  render() {
    const { fecthTrips } = this.props
    return (
     <div>
       <DenseAppBar />
        
       <h1>Lista de Viagiam Detalhes</h1>
       {this.props.trips.map(trip =>(
         <div>
          <p>{trip.name}</p> 
          <p>{trip.description}</p>
        </div>
       ))}
    </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips.allTrips
})


const mapDispatchToProps = dispatch => ({
        fecthTrips: () => dispatch(getAllTrips())

})

export default connect(mapStateToProps, mapDispatchToProps) (TripDetailsPage);