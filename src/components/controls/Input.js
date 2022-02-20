import { TextField } from '@material-ui/core'
import React from 'react'

export default function Input(props) {
    const { name, label, value, error = null, onChange,...other } = props;
    //other property is designed for additional properties of search input 
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}
