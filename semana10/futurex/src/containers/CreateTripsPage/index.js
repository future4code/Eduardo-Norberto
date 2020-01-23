import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { routes } from "../Router";
import DenseAppBar from '../DenseAppBar';
import FooterApp from '../FooterApp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { createTrip } from "../../actions/"
import { DivForm, DivMain} from "./style"
import Select from '@material-ui/core/Select';

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
    required: true,
  },
  {
    name: "description",
    type: "text",
    label: "Descrição da viagem",
    pattern: "^[a-zA-Z 0-9_-]{29,200}$",
    required: true
  },
  {
    name: "durationInDays",
    type: "number",
    label: "Duração da viagem em dias",
    minValue: 50,
    required: true
  }
];


class CreateTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      planet: "",
    };
  }

  componentDidMount(){
    const token = window.localStorage.getItem("token")
    if(token === null){
      // this.props.goToLogin();
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({form: {...this.state.form, [name]: value }})
  }


  handleCreateTrip = (event) => {
    event.preventDefault();
    const { name, planet, date, description, durationInDays } = this.state.form;
    this.props.createTrip(name, planet, date, description, durationInDays)
}

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
                      <TextField variant="outlined" defaultValue="Small" size="small"
                        name={input.name}
                        type={input.type}
                        value={this.state.form[input.name] || ""}
                        required={input.required}
                        onChange={this.handleInputChange}
                        pattern={input.pattern}
                      />
                  </DivForm>
                  ))}
                    <Typography component="h3" variant="h5">Planeta:</Typography>
                      <Select 
                        name="planet"
                        onChange={this.handleInputChange}
                        value={this.state.form.planet}>
                            <MenuItem value="Terra" selected="selected">Terra</MenuItem>
                            <MenuItem value="Mercúrio">Mercúrio</MenuItem>
                            <MenuItem value="Vênus">Vênus</MenuItem>
                            <MenuItem value="Marte">Marte</MenuItem>
                            <MenuItem value="Júpiter">Júpiter</MenuItem>
                            <MenuItem value="Saturno">Saturno</MenuItem>
                            <MenuItem value="Urano">Urano</MenuItem>
                            <MenuItem value="Netuno">Netuno</MenuItem>
                      </Select>
                          <br/><br/>
                      <Button variant="contained" size="medium" color="inherit" type="submit" onClick={this.handleCreateTrip}>Enviar</Button>
                  
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
  goToDetail: () => dispatch(push(routes.detailsTrips)),
  createTrip: (name, planet, date, description, durationInDays) => dispatch(createTrip(name, planet, date, description, durationInDays))
})

export default connect(null, mapDispatchToProps) (CreateTripsPage);
