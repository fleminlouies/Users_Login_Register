import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme, props) => ({
    field:{
        borderRadius: 12,
        letterSpacing:"0.03em",
        width: props => props.width? props.width : '100%',
        marginBottom:8
    },
    labelText:{
        fontSize: '0.99rem'
    },
    root:{
          '& .MuiOutlinedInput-root': {  
            borderRadius: 10,  
            '& fieldset': {            
                borderColor: '#CED4DA', 
                borderRadius: 10,  
            },
            '&:hover fieldset': {
                borderColor: '#CED4DA', 
            },
            '&.Mui-focused fieldset': { 
                borderColor: '#012a93ba',
            },
        },
    }
}));

export default function TextFields(props) {
    const classes = useStyles(props);
    return (
        <div style={{width:'100%'}}>
            <h1 className={classes.labelText}>
                {props.Label}
            </h1>
             <TextField  
                size='small'
                variant="outlined" 
                required={props.required || null}
                name={props.name}
                placeholder={props.placeHolder}
                onChange={props.Change} 
                type={props.type || null }
                className={classes.field}
                classes={{
                    root: classes.root
                  }}
            />
        </div>
    )
}
