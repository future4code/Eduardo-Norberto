import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTaskAction } from "../../actions";
import list from "../../reducers/list";

const ListSelect = styled.div `
    padding-bottom: 20px;
`;

const ItemList = styled.ul `
    font-size: 12pt;
	font-family: Helvetica, sans-serif;
	list-style: none;
`;

const ListItem = props =>{
	console.log(addTaskAction)
    return (
        <ListSelect>
            <ItemList>
				{addTaskAction}
            </ItemList>
        </ListSelect>
    )
}

const mapStateToProps = state => {
	return {
		addTaskAction: state.list.addTaskAction,
	};
  };

export default connect(mapStateToProps)(ListItem);