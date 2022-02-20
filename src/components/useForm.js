import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

/**
 * Define use form hook
 * @param {*} initialValues
 * @returns 
 */
export function useForm(initialValues,isValidateForm=true,validate) {
    if(typeof(isValidateForm)=='function'){  
        validate=isValidateForm;
        isValidateForm=true;
    }
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        if(isValidateForm){
            validate({[name]:value})
        }
    }

    const reSetForm = () => {
        setValues(initialValues);
        setErrors({})
    }
    return (
        {
            values,
            setValues,
            handleInputChange,
            errors,
            setErrors,
            reSetForm
        }
    )
}

/**
 * Define Form component
 */
const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiFormControl-root": {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {
    const classes = useStyles()
    const { children, onSubmit } = props
    return (
        <form className={classes.root} autoComplete='off' onSubmit={onSubmit}>
            {children}
        </form>
    )
}
