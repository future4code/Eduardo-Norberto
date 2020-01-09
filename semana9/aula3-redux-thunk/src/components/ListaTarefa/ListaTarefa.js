import React from "react";
import styled from "styled-components";
import InputTask from "./InputTask"
import FooterButton from "./FooterButton"
import ListItem from "./ListItem"

const ListMain = styled.div `
    background-color: white;
    width: 600px;
    height: 510px;
    border: 1px solid black;
    margin: 0 auto;
`;

class ListaTarefa extends React.Component{

	render(){
		return (
			<ListMain>
				<InputTask />
				<ListItem />
				<FooterButton />
			</ListMain>
		)
		}
}


export default ListaTarefa;