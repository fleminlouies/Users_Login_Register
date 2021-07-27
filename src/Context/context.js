import React, { Component } from 'react';

const initialUsers = [
    {
        name:'manu',
        email:'manu@gmail.com'
    },
    {
        name:'Louies',
        email:'Louies@gmail.com'
    },
    {
        name:'Orange',
        email:'Orange@gmail.com'
    },
    {
        name:'Yellow',
        email:'Yellow@gmail.com'
    },
    {
        name:'blue',
        email:'blue@gmail.com'
    },
    {
        name:'black',
        email:'black@gmail.com'
    },
    {
        name:'red',
        email:'red@gmail.com',
        password:'red'
    },
]
const UserContext = React.createContext();

export default class UserProvider extends Component {
    state ={
        data:initialUsers,
        user:false
    };

 

    handleChange = props =>{
        if(this.state.data.find(data => data.email === props.email)){
            this.setState({data : [...this.state.data]});
        }
        else
        this.setState({data : [props, ...this.state.data]});
    };

    handleUser = props =>{
            this.setState({...this.state, user:props});
    };
    
  
    render() {
        return (
            <UserContext.Provider value = {{...this.state, handleChange: this.handleChange, handleUser: this.handleUser}} >
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext }