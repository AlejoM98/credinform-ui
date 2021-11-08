/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(()=>({
    root: {
      flexGrow: 1,
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
}));


function Navbar() {
    const classes= useStyles();
    return (
        <div className = {classes.root} >
            <AppBar position="static"  >
                <Toolbar>
                    <IconButton edge="start" className= {classes.menuButton} color="inherit" href="http://localhost:3000/kanban2"> 
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                       DashBoard
                    </Typography>

                    <IconButton color="inherit">
                        <img src={require('../assets/img/LogoCred.jpg')} width="40px" height="40px" className={classes.imagen}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;