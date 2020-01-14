import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";



class HomePage extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render(){
        console.log(this.props)
        const { goToLogin, goToForm, goToCreate, goToList } = this.props
        return(
            <div>
                <ul>
                    <li onClick={this.props.goToHome}>Home</li>
                    <li onClick={this.props.goToCreate}>Criar</li>
                    <li onClick={this.props.goToList}>Listar</li>
                    <li onClick={this.props.goToDetail}>Detalhar</li>
                </ul>
                <h2>Deseja fazer o login ou entrar no formulário de aplicação?</h2>
                <Button onClick={this.props.goToLogin}>Login</Button> <Button onClick={this.props.goToForm}>Formulário</Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToHome: () => dispatch(goBack("/")),
        goToLogin: () => dispatch(push(routes.contract)),
        goToForm: () => dispatch(push(routes.form)),
        goToCreate: () => dispatch(push(routes.createTrips)),
        goToList: () => dispatch(push(routes.listTrips)),
        goToDetail: () => dispatch(push(routes.detailsTrips))
    }
}

export default connect(null, mapDispatchToProps)(HomePage);