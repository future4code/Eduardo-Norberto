import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createList } from "../../actions";
import  list  from "../../reducers/list";
import ListCard from "./ListCard"


class ListItem extends React.Component {
	constructor(props){
		super(props)

		this.state= {}
	}

	render(){
	return this.props.listTask.map(lista => (<ListCard lista={lista}/>)	
	)
	}
}

const mapStateToProps = (state)=> ({
	listTask: state.list.allTasks
})

export default connect(mapStateToProps) (ListItem);