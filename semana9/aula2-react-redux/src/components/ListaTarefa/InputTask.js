import React from "react";
import styled from "styled-components";
import { addTaskAction } from "../../actions"
import { connect } from "react-redux";

const InputList = styled.input `
    width: 595px;
    height: 30px;
    position: top;
    font-size: 15pt;
    font-family: Helvetica, sans-serif;
`;

function InputTask(props) {
    return(
        <div>
			<InputList type="text" placeholder="O que tem que ser feito?"/>
			<button onClick={ () => props.changeList("ADD_TASK")}>Salvar</button>
		</div>
    )
}

const mapDispatchToProps = dispatch => {
	return {
	  changeList: list => dispatch(addTaskAction(list))
	};
  };

export default connect(null, mapDispatchToProps)(InputTask);