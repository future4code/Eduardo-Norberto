import React from 'react';
import BoredAPI from './components/BoredAPI';
import Activity from './components/Activity';
import styled from 'styled-components'

const ImgClick = styled.img `
  width: 100px;
  padding: 5px;
`

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
        currentPage: "bored"
    }
  }

  handleChangePage = () =>{
    if (this.state.currentPage === "bored"){
      this.setState({currentPage: 'activity'});
    }else {
      this.setState({currentPage: "bored"})
    }
  }

  render(){
    
    return (
      <div>
        <ImgClick onClick={this.handleChangePage} src={require('./components/image/entediado.svg')} />
        {this.state.currentPage === "activity"? <BoredAPI /> : <Activity />}
      </div>
    );
  }
  
}

export default App;