import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
          Future4 {" "}
        {new Date().getFullYear()}
      </Typography>
    );
}

const FooterStyle = styled.footer `
    position: relative;
    bottom: 0;
    padding: 10px;
    width: 100%;
    background-color: #4787ff;
    
`;

export default function FooterApp() {
    

    return (
        <FooterStyle>
            <Typography variant="h6" align="center" gutterBottom>
                FutureX
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Encontre as melhores viagens espaciais!
            </Typography>
            <Copyright />
        </FooterStyle>
    )
}