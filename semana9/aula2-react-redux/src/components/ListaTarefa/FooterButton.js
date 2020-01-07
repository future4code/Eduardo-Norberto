import React from "react";
import styled from "styled-components";

const BarButton = styled.div `
    width: 595px;
    height: 35px;
    position: bottom;
    display: flex;
    justify-content: space-between;
`;

const ButtonItem = styled.button `
    text-align: center;

`;

function FooterButton(props) {
    
    return (
        <BarButton>
            <ButtonItem>
                Marcar todas como Completas
            </ButtonItem>
            <ButtonItem>
                Todas
            </ButtonItem>
            <ButtonItem>
                Pendentes
            </ButtonItem>
            <ButtonItem>
                Completas
            </ButtonItem>
            <ButtonItem>
                Remover completas
            </ButtonItem>
        </BarButton>
    )
}

export default FooterButton;