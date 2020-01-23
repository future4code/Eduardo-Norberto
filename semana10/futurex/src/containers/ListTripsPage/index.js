import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getAllTrips } from '../../actions';
import DenseAppBar from '../DenseAppBar';
import FooterApp from '../FooterApp';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DivTitle = styled.div`
 margin-top: 30px;
 margin-bottom: 30px;
 padding: 20px;
`;

const DivList = styled.div`
  width: 700px;
  margin: 0 auto;
  margin-bottom: 180px;
`;

class ListTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
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
            <Typography component="h2" variant="h2" align="left">Lista de Viagem</Typography>
          </DivTitle>
          <DivList>
            {this.props.trips.map(trip =>(
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography component="h4" variant="h4">{trip.name}</Typography>
               </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography component="h6" variant="h6">
                {trip.description}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
      
             ))}
         </DivList>
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

export default connect(mapStateToProps, mapDispatchToProps) (ListTripsPage);