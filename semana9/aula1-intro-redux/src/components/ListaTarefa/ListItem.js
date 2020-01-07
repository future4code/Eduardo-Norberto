import React from "react";
import styled from "styled-components";

const ListSelect = styled.div `
    padding-bottom: 389px;
`;

const ItemList = styled.ul `
    font-size: 12pt;
    font-family: Helvetica, sans-serif;
`;

function ListItem(props){
    return (
        <ListSelect>
            <ItemList>
                <li>Use Redux</li>
            </ItemList>
        </ListSelect>
    )
}

export default ListItem;