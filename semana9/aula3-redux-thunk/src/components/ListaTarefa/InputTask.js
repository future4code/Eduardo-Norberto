import React from "react";
import styled from "styled-components";
import { createListAction } from "../../actions"
import { connect } from "react-redux";

const InputList = styled.input `
    width: 595px;
    height: 30px;
    position: top;
    font-size: 15pt;
    font-family: Helvetica, sans-serif;
`;

class InputTask extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			listValue: ''
		}
	}

	onChangeList = event => {
		this.setState({ listValue: event.target.value});
	}

	onCreateList = () => {
		const newTask = {
			text: this.state.listValue,
			completed: false,
			id: new Date().getTime()
		}
		this.props.createList(newTask)
		
		
	}

	render(){
		return(
			<div>
				<InputList type="text" placeholder="O que tem que ser feito?" onChange={this.onChangeList} value={this.state.listValue}/>
				<button onClick={this.onCreateList}>Salvar</button>
			</div>
		)
	};
}
const mapDispatchToProps = (dispatch) => ({
	  createList: (list) => dispatch(createListAction(list)),
  })

export default connect(null, mapDispatchToProps)(InputTask);