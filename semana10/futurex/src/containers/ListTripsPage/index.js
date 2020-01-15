import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { getAllTrips } from '../../actions'
import DenseAppBar from '../DenseAppBar'

class ListTripsPage extends Component {
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
       
       <h1>Lista de Viagiam</h1>
       {this.props.trips.map(trip =>(
          <p>{trip.name}</p>
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

export default connect(mapStateToProps, mapDispatchToProps) (ListTripsPage);