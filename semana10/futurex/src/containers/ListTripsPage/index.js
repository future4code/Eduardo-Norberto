import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import Router from "../Router";
import { getAllTrips } from '../../actions'

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
    const { goToLogin, goToForm, goToCreate, goToList, fecthTrips } = this.props
    
    return (
     <div>
       <ul>
          <li onClick={this.props.goToHome}>Home</li>
          <li onClick={this.props.goToCreate}>Criar</li>
          <li onClick={this.props.goToList}>Listar</li>
          <li onClick={this.props.goToDetail}>Detalhar</li>
        </ul>
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
  goToHome: () => dispatch(goBack("/")),
  goToLogin: () => dispatch(push(routes.contract)),
  goToForm: () => dispatch(push(routes.form)),
  goToCreate: () => dispatch(push(routes.createTrips)),
  goToList: () => dispatch(push(routes.listTrips)),
  goToDetail: () => dispatch(push(routes.detailsTrips)),
  fecthTrips: () => dispatch(getAllTrips())
})

export default connect(mapStateToProps, mapDispatchToProps) (ListTripsPage);