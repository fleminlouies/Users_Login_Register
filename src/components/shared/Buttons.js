import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    Button:{
        background: "#012A93",
        padding:  8,
        marginTop:15,
        color: "#F9F3FA",
        borderRadius: 10,
        margin: '10px 0px',
        letterSpacing:"0.03em",
        width:'100%',
        "&:hover":{
            background:  "#012A93",
          },
    },
  }));

export default function Buttons(props) {
    const classes = useStyles();

    return (
        <div>
            <Button className={classes.Button}  elevation={5}  onClick={props.Click} type={props.type? props.type : null}>
                {props.name}
            </Button>
        </div>
    )
}
