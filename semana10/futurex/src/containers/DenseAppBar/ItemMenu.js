import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"

class ItemMenu extends React.Component {
    constructor(props){
        super(props)
    }



    render(){
        const { goToLogin, goToForm, goToCreate, goToList } = this.props
        return (
            <div>
                <MenuItem>
                    <ListItemText onClick={this.props.goToHome} primary="Home" />
                </MenuItem>

                <MenuItem>
                    <ListItemText onClick={this.props.goToList} primary="Listar" />
                </MenuItem>

                <MenuItem>
                    <ListItemText onClick={this.props.goToDetail} primary="Detalhar" />
                </MenuItem>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        goToHome: () => dispatch(push(routes.home)),
        goToLogin: () => dispatch(push(routes.contract)),
        goToForm: () => dispatch(push(routes.form)),
        goToCreate: () => dispatch(push(routes.createTrips)),
        goToList: () => dispatch(push(routes.listTrips)),
        goToDetail: () => dispatch(push(routes.detailsTrips))
    }
}

export default connect(null, mapDispatchToProps) (ItemMenu);