import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid, Container } from '@material-ui/core';
import cardImage from '../assets/Card Base.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height:'100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]:{
        height:'unset',
        margin:'30px 0px'
    }
  },
  Text: {
      position:'absolute',
      top:8,
      left:16,
      color:'#012A93',
      fontWeight:900
  },
  cardImage:{
      position:'relative',
      height:'100%'
  },
  image:{
      width:'100%',
      height:'100%'
  },
  gridBody:{
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding:'0px 60px',
    [theme.breakpoints.down('xs')]:{
        padding:'0px 20px',
    }
  }
}));

export default function Layout(props) {
    const classes = useStyles();
    return (
        <Container maxWidth='md'>
            <div className={classes.root}>
                <Card variant="outlined" >
                    <Grid container>
                        <Grid item xs={12} sm={6} >
                            <div className={classes.cardImage}>
                                <img src={cardImage} alt='cardImage' className={classes.image}/>
                                <h2 className={classes.Text}>
                                    MINTECH
                                </h2>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.gridBody}>
                            {props.children}
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </Container>
    )
}
