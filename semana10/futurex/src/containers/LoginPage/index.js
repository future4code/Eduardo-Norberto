import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router"
import  login  from "../../actions/login";
import FooterApp from '../FooterApp';
import DenseAppBar from '../DenseAppBar';


const LoginWrapper = styled.form`
  width: 100%;
  height: 90vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginButton = () => {
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <DenseAppBar />
          <LoginWrapper>
            <TextField
              onChange={this.handleFieldChange}
              name="email"
              type="email"
              label="E-mail"
              value={email}
            />
            <TextField
              onChange={this.handleFieldChange}
              name="password"
              type="password"
              label="Password"
              value={password}
            />
            <Button onClick={this.handleLoginButton}>Login</Button>
          </LoginWrapper>
        <FooterApp />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToHome: ()=> dispatch(push(routes.home)),
  login: (email, password) => dispatch(login(email, password))
})

export default connect(null, mapDispatchToProps)(LoginPage);
