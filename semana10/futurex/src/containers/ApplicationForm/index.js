import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { routes } from "../Router";
import FooterApp from '../FooterApp'
import DenseAppBar from '../DenseAppBar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DivMain, DivForm} from "./style";
import SelectCountry from "./SelectCountry"
import { applicationTrip } from "../../actions"
import { getAllTrips } from "../../actions"
import { MenuItem } from "@material-ui/core";
import Select from '@material-ui/core/Select';



const candidateForm = [
  {
    name: "name",
    type: "text",
    label: "Seu nome",
    pattern: "^[a-zA-Z][a-zA-Z-_\.]{2,20}$",
    required: true,
  },
  {
    name: "age",
    type: "number",
    label: "Sua idade",
    minValue: 18,
    required: true,
  },
  {
    name: "applicationText",
    type: "text",
    label: "Texto de aplicação",
    pattern: "^[a-zA-Z 0-9_-]{29,200}$",
    required: true,
  },
  {
    name: "profession",
    type: "text",
    label: "Sua profissão",
    pattern: "^[a-zA-Z 0-9_-]{9,50}$",
    required: true,
  }
]

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     form: {},
     country: "",
     tripId: "",
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({form: {...this.state.form, [name]: value }})
  }

  handleOnSubmit = event => {
    event.preventDefault();
  };


  componentDidMount() {
    this.props.fecthTrips();
  }


  applicationTrip = (event) =>{
    event.preventDefault();
    console.log(this.props.applicationTrip)
    const {name, age, applicationText, profession, country} = this.state.form;
    this.props.applicationTrip(name, age, applicationText, profession, country);
  }

  render() {
    const { fecthTrips } = this.props

    return (

     <div>
       <DenseAppBar />
        <DivMain>
          <Typography component="h1" variant="h5" align="left">Inscreva-se para uma Viagem</Typography>
       
            <Grid  container direction="column" justify="center" alignItems="center">
              <form onSubmit={this.handleOnSubmit}>
                {candidateForm.map(input => (
                  <DivForm key={input.name}>
                    <Typography component="h3" variant="h5" htmlFor={input.name}>{input.label}: </Typography>
                      <TextField variant="outlined"
                        id={input.id}
                        name={input.name}
                        type={input.type}
                        value={this.state.form[input.name] || ""}
                        required={input.required}
                        onChange={this.handleInputChange}
                        pattern={input.pattern}
                      />
                  </DivForm>
                ))}
                  <Typography component="h3" variant="h5">País:</Typography>
                    <SelectCountry  value={this.state.form.country} onChange={this.handleInputChange}/>
                      <br/><br/>
                  <Typography component="h3" variant="h5">Selecionar Viagem:</Typography>
                    <Select value={this.state.form.tripId} onChange={this.handleInputChange} variant="outlined" defaultValue="Small" size="medium" name="tripId">
                      {this.props.trips.map(trip =>(
                        <MenuItem value={trip.id}>{trip.name} {"-"} {trip.planet}</MenuItem>
                      ))}
                    </Select>
                    <br/><br/>
                  <Button variant="contained" size="medium" color="inherit" type="submit" onClick={this.applicationTrip}>Enviar</Button> 
                
              </form>
            </Grid>
          </DivMain>
       <FooterApp />
     </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips.allTrips
})

const mapDispatchToProps = dispatch => ({
  goToHome: ()=> dispatch(push(routes.home)),
  applicationTrip: (name, age, applicationText, profession, country) => dispatch(applicationTrip(name, age, applicationText, profession, country)),
  fecthTrips: () => dispatch(getAllTrips()),
})

export default connect(mapStateToProps, mapDispatchToProps) (ApplicationForm);
