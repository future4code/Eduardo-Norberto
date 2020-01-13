import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"


class HomePage extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render(){
        const { goToLogin, goToForm } = this.props
        return(
            <div>
                <h2>Deseja fazer o login ou entrar no formulário de aplicação?</h2>
                <Button onClick={goToLogin}>Login</Button> <Button onClick={goToForm}>Formulário</Button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.contract)),
    goToForm: () => dispatch(push(routes.form))
})

export default connect(null, mapDispatchToProps) (HomePage)