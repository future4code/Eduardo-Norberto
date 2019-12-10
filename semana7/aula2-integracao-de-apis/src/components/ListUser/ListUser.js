import React from 'react';
import axios from 'axios';
import styled from 'styled-components'; 

const ListArea = styled.div `
  margin: 0 auto;
  width: 400px;
  text-align: center;
  padding: 10px;
`;

function ListUser (props){
    
    return(
        <ListArea>
            name:{props.dadosUsuario.name}
        </ListArea>
    );
}


export default ListUser;