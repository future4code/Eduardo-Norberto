import React from "react"
import styled from "styled-components"
import Checkbox from "@material-ui/core/Checkbox"

const Item = styled.ul `
    font-size: 12pt;
	font-family: Helvetica, sans-serif;
	list-style: none;
`;

class ListCard extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			checked: false

		}
	}

	handleCheckboxChange = event =>
	this.setState({ checked: event.target.checked })
	
	// onClickCheckup = id => {
	// 	const checkTask = this.props.lista.map(item => {
	// 		if (item.id === id){
	// 			return {
	// 				...item,
	// 				true: !item.true
	// 			}
	// 		}
	// 		return item;
	// 	})
	// 	this.setState ({lista: checkTask})
	// }

	

	render(){
		return(
			<Item>
				<Checkbox onClick={() => this.onClickCheckup(this.props.lista.id)} onChange={this.handleCheckboxChange}/>
				{this.props.lista.text}
			</Item>
		)
	}
}

export default ListCard;