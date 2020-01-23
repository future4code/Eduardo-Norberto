import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import ItemMenu from './ItemMenu'
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({

  popoverPaper: {
    width: '25%',
    height: '40%',
    maxHeight: 'unset',
    left: '5% !important',
  },
});


    const DenseAppBar = (props) => {
        const [anchorEl, setAnchorEl] = React.useState(null);
      
        const handleClick = (event) => {
          console.log('currect target', event.currentTarget);
          setAnchorEl(event.currentTarget);
        }
      
        const handleClose = () => {
          setAnchorEl(null);
        }
        
       

        return (
          <div>
            <AppBar 
            position="static" 
            style={
                { 
                  background:"#ff6347" 
                }
              }
            >
                <Toolbar variant="dense">
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            color="inherit"
                            onClick={handleClick}
                        />
                    </IconButton>

                <Menu
                    PopoverClasses={{paper: props.classes.popoverPaper}}
                    id="customized-menu"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'bottom' }}
                    transformOrigin={{ vertical: 'top' }}
                    getContentAnchorEl={null}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                        <ItemMenu />

                </Menu>
                    <Typography variant="h6" color="inherit">
                        FutureX
                    </Typography>
            </Toolbar>
            </AppBar>
        </div>
    );
 }
 
 


export default  withStyles(styles) (DenseAppBar);