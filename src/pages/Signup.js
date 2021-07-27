import React,{useContext, useState} from 'react';
import Layout from '../components/Layout';
import TextFields from '../components/shared/TextFields';
import Buttons from '../components/shared/Buttons'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { UserContext } from '../Context/context';

const useStyles = makeStyles((theme) => ({
    socialIcons:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        '& img':{
            width:40,
            margin:5
        }
    },
    signupText:{
        textAlign: 'center', 
        color:'#012A93', 
        fontWeight: 500 ,
        textDecoration:'none'
    },
    Title:{
        textAlign:'center',
        color:'#343A40',
        fontSize:'1.5rem'
    }
}));

export default function Signup(props) {
    const classes = useStyles();
    const context = useContext(UserContext)
    const [ userData, setUserData] = useState({
        name:'',
        email:'',
        date:'',
        phone:'',
        password:''
    })
    
    const handleChange = event =>{
        const name =  event.target.name;
        const value = event.target.value;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        context.handleChange(userData)
        props.history.push(`/`)
    }

    return (
        <div>
            <Layout>
                <form onSubmit={handleSubmit}>
                    <h1 className={classes.Title}>SIGN UP</h1>
                    <TextFields
                        required
                        Label={'Name'}
                        placeHolder={'ex : John'}
                        name={'name'}
                        Change={(e) => handleChange(e)}
                    />
                    <TextFields
                        required
                        Label={'Email'}
                        name={'email'}
                        type={'email'}
                        placeHolder={'ex : johndoe@email.com'}
                        Change={(e) => handleChange(e)}
                    /> 
                    <Grid container spacing={2}  justifyContent="center"alignItems="center" >
                        <Grid item xs={12} sm={12} md={6}>
                            <TextFields
                                Label={'Phone number'}
                                type={'number'}
                                placeHolder={'0000000000'}
                                name={'phone'}
                                Change={(e) => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextFields
                                Label={'Date of Birth'}
                                type={'date'}
                                placeHolder={'DD/MM/YY'}
                                name={'date'}
                                Change={(e) => handleChange(e)}
                            />
                        </Grid>
                    </Grid>
                    <TextFields
                        required
                        Label={'Password'}
                        type={'password'}
                        placeHolder={'Enter your password'}
                        name={'password'}
                        Change={(e) => handleChange(e)}
                    />
                    <div className={classes.socialIcons}>
                        <Checkbox
                            defaultChecked color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <p style={{ textAlign: 'center', fontSize:'0.88rem' }}>
                            I accept the 
                        </p>
                        <Link to={'/'}  className={classes.signupText}>
                            Terms & conditions.
                        </Link>
                    </div>
                    <Buttons name={'Sign up'} type={'submit'}/>
                    <div className={classes.socialIcons}>
                        <p style={{ textAlign: 'center', fontSize:'0.88rem' }}>
                            Don't have an account? 
                        </p>
                        <Link to={'/login'} className={classes.signupText}>
                            {'Login'}
                        </Link>
                    </div>
                </form>
            </Layout>
        </div>
    )
}
