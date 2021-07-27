import React,{useContext, useState} from 'react';
import Layout from '../components/Layout';
import TextFields from '../components/shared/TextFields';
import Buttons from '../components/shared/Buttons'
import { makeStyles } from '@material-ui/core/styles';
import twitter from '../assets/Group 16.svg';
import faceBook from '../assets/Group 15.svg';
import google from '../assets/Group 17.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/context';
import Alert from '@material-ui/lab/Alert';
import FacebookLogin from 'react-facebook-login';


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
    },
    input: {
        border: 'none',
        cursor:'pointer',
        background: 'transparent',
        color: 'transparent',
        width:50,
        height:50,
        padding:0,
        '& img':{
            width:40,
            margin:5
        }
      },
}));

export default function Login(props) {
    const classes = useStyles();
    const context = useContext(UserContext)
    const [ userData, setUserData] = useState({email:'',password:'' })
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(context.data.find(item => item.email === userData.email && item.password === userData.password))
        {
            context.handleUser(true)
            props.history.push(`/`)
        }
        else
        context.handleUser(false)
        setError('Email or Password is not matching')
    }

    const responseFacebook = (response) => {
        console.log((response))
        if(response.email )
            {   
                context.handleUser(true)
                context.handleChange({email:response.email})
                props.history.push(`/`)
            }
      }


    return (
        <div>
            <Layout>
                <form onSubmit={handleSubmit}>
                    <h1 className={classes.Title}>LOGIN</h1>
                    {error !== '' && <Alert severity="error">{error}</Alert>}
                    <TextFields
                        required
                        Label={'Email'}
                        type={'email'}
                        placeHolder={'ex : johndoe@email.com'}
                        Change={(e) => {setUserData({...userData, email:e.target.value}); setError('')}}
                    />
                    <TextFields
                        required
                        Label={'Password'}
                        type={'password'}
                        placeHolder={'Enter your password'}
                        Change={(e) => {setUserData({...userData, password:e.target.value});  setError('')}}
                    />
                    <Buttons name={'Log in'} type={'submit'}  />
                    <p style={{ textAlign: 'center' , fontSize:'0.88rem' }}>
                        Or Log in using
                    </p>
                    <div className={classes.socialIcons}>
                        <img src={twitter} alt='Twitter' />
                        <FacebookLogin
                            cssClass={classes.input}
                            appId="1739065369814899"
                            autoLoad={true}
                            fields="name,email"
                            callback={responseFacebook} 
                            icon={<img src={faceBook} alt='faceBook' />}
                        />
                        <img src={google} alt='Google' />
                    </div>
                    <div className={classes.socialIcons}>
                        <p style={{ textAlign: 'center', fontSize:'0.88rem' }}>
                            Don't have an account? 
                        </p>
                        <Link to={`/signup`} className={classes.signupText}>
                            {' Sign Up'}
                        </Link>
                    </div>
                </form>
            </Layout>
        </div>
    )
}
