import React from 'react';
import {Card, Typography, CardContent} from '@material-ui/core';
import  {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
        root: {
            textAlign: 'center',
            backgroundColor: 'rgba(236,210,28,1)'
        },
        texto: {
            fontSize: 18,
            color:'white'
        },
        titulo: {
            fontweight: 'bold',
            fontSize: 20,
            color:'white'
        }
        }));

function Cards(props) {

    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.titulo}>
                {props.titulo}  
                </Typography>

                <Typography className={classes.texto}>
                {props.texto}  
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Cards;