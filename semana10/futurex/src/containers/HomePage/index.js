import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import DenseAppBar from "../DenseAppBar"
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import { routes } from "../Router";
import FooterApp from "../FooterApp";
import MediaCard from "../MediaCard"
import Typography from '@material-ui/core/Typography';

const MainSection = styled.section `
    height: 400px;
    padding-top: 150px;
    text-align: center;
    background-color: tomato;
`;


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
                   <MediaCard />
                        <MainSection>
                            <Typography gutterBottom variant="h5" component="h2">
                                Deseja fazer o login ou entrar no formulário de aplicação?
                            </Typography>
                            <Button onClick={this.props.goToLogin} variant="contained" size="medium" color="inherit" type="submit">Login</Button> <Button onClick={this.props.goToForm} variant="contained" size="medium" color="inherit" type="submit">Formulário</Button>
                        </MainSection>
                <FooterApp />
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
    }
}

export default connect(null, mapDispatchToProps) (HomePage);