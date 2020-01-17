import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import DenseAppBar from '../DenseAppBar';
import FooterApp from '../FooterApp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const DivForm = styled.div`
  padding: 10px;
`;

const DivMain = styled.div `
  padding-top: 50px;
  padding: 20px;
  text-align: center;
`;

const DivButton = styled.div`
  padding: 10px
`;

const tripForm = [
  {
    name: "name",
    type: "text",
    label: "Nome da viagem",
    required: true,
    pattern: "^[a-zA-Z 0-9_-]{4,30}$"
  },
  {
    name:"date",
    type: "date",
    label: "Data da viagem",
    value: "2020-01-16",
    min: "2020-01-16",
  },
  {
    name: "description",
    type: "text",
    label: "Descrição da viagem",
    pattern: "^[a-zA-Z 0-9_-]{29,200}$"
  },
  {
    name: "durationInDays",
    type: "number",
    label: "Duração da viagem em dias",
    min: "50",
  }
]

class CreateTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  hadleInputChange = event => {
    const { name, value } = event.target;
    this.setState({form: {...this.state.form, [name]: value }})
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.form);
  };

  render() {
  const { goToLogin, goToForm, goToCreate, goToList } = this.props
    return (
     <div>
       <DenseAppBar />
        <DivMain>
          <Typography component="h1" variant="h5" align="left">Criar Lista de Viagem</Typography>
       
            <Grid  container direction="column" justify="center" alignItems="center">
             <form onSubmit={this.handleOnSubmit}>
                {tripForm.map(input => (
                  <DivForm key={input.name}>
                    <Typography component="h3" variant="h5" htmlFor={input.name}>{input.label}: </Typography>
                      <TextField variant="outlined"
                        name={input.name}
                        type={input.type}
                        value={this.state.form[input.name] || ""}
                        required={input.required}
                        onChange={this.hadleInputChange}
                        pattern={input.pattern}
                      />
                  </DivForm>
                  ))}
                    <DivButton>
                      <select name="planetas" id="planetas">
                        <option value="Terra" selected="selected">Terra</option>
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Marte">Marte</option>
                        <option value="Júpiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                      </select>
                          <br/><br/>
                      <Button variant="contained" size="medium" color="inherit" type="submit">Enviar</Button>
                  </DivButton>
              </form>
          </Grid >
        </DivMain>
       <FooterApp />
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
