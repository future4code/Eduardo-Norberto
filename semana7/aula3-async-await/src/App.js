import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserRegister from './components/UserRegister/UserRegister'
import UserList from './components/UserList/UserList'

class App extends React.Component {
 constructor(props){
   super(props);

   this.state = {
      currentPage: 'register'
   }
 }

 handleChangePage = () => {
   if (this.state.currentPage === 'register'){
     this.setState({
        currentPage: 'listUser'
     })
   }else {
     this.setState({
       currentPage: 'register'
     })
   }
 }

 
 render (){
   const textButton = this.state.currentPage === 'register'? 'Ir para Lista': 'Ir para Cadastro'
  
   return (
    <div>
      <button onClick={this.handleChangePage}>{textButton}</button>
      {this.state.currentPage === 'register' ? <UserRegister /> : <UserList />}
    </div>
  );
 }
  
}

export default App;
