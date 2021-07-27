import React,{useContext} from 'react';
import { UserContext } from '../Context/context';
import Layout from '../components/Layout';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function Users() {
    const context = useContext(UserContext)
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={(e)=> context.handleUser(false) }>LOGOUT</Button>
                </Toolbar>
            </AppBar>
            <Layout>
                <h1 style={{textAlign:'center', color:'#343A40',fontSize:'1.5rem'}}>
                    ACTIVE USERS
                </h1>
                {context.data.length> 0 &&
                    context.data.map((item, index )=> 
                        <div key={index}>
                            <h1 style={{fontSize:'1rem', textAlign:'center'}}>{item.email}</h1>
                        </div>)
                }
            </Layout>
        </>
    )
}
