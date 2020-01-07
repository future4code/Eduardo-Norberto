import React from "react";
import styled from "styled-components";

const InputList = styled.input `
    width: 595px;
    height: 30px;
    position: top;
    font-size: 15pt;
    font-family: Helvetica, sans-serif;
`;

function InputTask(props) {
    return(
        <InputList type="text" placeholder="O que tem que ser feito?"/>
    )
}

export default InputTask;