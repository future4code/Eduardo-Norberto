import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import DenseAppBar from "../DenseAppBar"
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"


class HomePage extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render(){
        const { goToLogin, goToForm, goToHome } = this.props
        return(
            <div>
                <DenseAppBar />
                
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
        goToForm: () => dispatch(push(routes.form))
    }
}

export default connect(null, mapDispatchToProps) (HomePage);