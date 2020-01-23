import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import DenseAppBar from "../DenseAppBar"
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import { routes } from "../Router";
import FooterApp from "../FooterApp";
import Typography from '@material-ui/core/Typography';


const DivMain = styled.section`
    height: 600px;
`;

class AdminPage extends Component{


    render(){
        const { goToHome, goToCreate, goToTripAdmin } = this.props
        return(
            <div>
                 <DenseAppBar />
                    <DivMain>
                        <Typography component="h4" variant="h4">Gerenciamento</Typography>
                        <Typography component="h6" variant="h6">Ação de Criar Nova Viagem:</Typography>
                            <Button onClick={this.props.goToCreate}>Entrar</Button>
                        <Typography component="h6" variant="h6">Ação de Lista Detalhada:</Typography>
                            <Button onClick={this.props.goToTripAdmin}>Entrar</Button>
                    </DivMain>
                 <FooterApp />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToHome: () => dispatch(goBack("/")),
        goToCreate: () => dispatch(push(routes.createTrips)),
        goToTripAdmin: () => dispatch(push(routes.adminTrips)),
    }
}

export default connect(null, mapDispatchToProps)(AdminPage);