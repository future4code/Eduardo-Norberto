import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getAllTrips } from  "../../actions";
import DenseAppBar from '../DenseAppBar'
import FooterApp from '../FooterApp'
import { Grid }  from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


const Card = styled.section `
  border-radius: 15px;
  width: 300px;
  height: 400px;
  padding: 20px;
  border: 1px solid black;
  background-color: whitesmoke;
`;

const DivMain = styled.section`
  padding: 30px;
  margin-bottom: 80px;
`;

const DivTitle = styled.div `
  margin-top: 20px;
`;

class TripDetailsPage extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
 
  componentDidMount() {
    this.props.fecthTrips();
  }

  render() {
    
    const { fecthTrips } = this.props

    return (
     <div>
       <DenseAppBar />
        <DivTitle>
          <Typography component="h2" variant="h2" align="left">Lista de Viagem Detalhes</Typography>
        </DivTitle>
            <DivMain>
              <Grid container spacing={12} justify="space-around">
              
                {this.props.trips.map(trip =>(
                  <Card>
                    <Typography component="h4" variant="h4">
                      {trip.name}
                    </Typography>
                    <Typography component="subtitle2" variant="subtitle2">
                      {trip.planet}
                    </Typography>
                    <Typography component="h6" variant="h6"> 
                      {trip.description}
                    </Typography>
                  </Card>
                ))}
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
        fecthTrips: () => dispatch(getAllTrips())

})

export default connect(mapStateToProps, mapDispatchToProps) (TripDetailsPage);