import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import Router from "../Router";
import DenseAppBar from '../DenseAppBar'


class CreateTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
  const { goToLogin, goToForm, goToCreate, goToList } = this.props
    return (
     <div>
       <DenseAppBar />
       
       <h1>Criar Lista de Viagiam</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToHome: () => dispatch(goBack("/")),
  goToLogin: () => dispatch(push(routes.contract)),
  goToForm: () => dispatch(push(routes.form)),
  goToCreate: () => dispatch(push(routes.createTrips)),
  goToList: () => dispatch(push(routes.listTrips)),
  goToDetail: () => dispatch(push(routes.detailsTrips))
})

export default connect(null, mapDispatchToProps) (CreateTripsPage);
