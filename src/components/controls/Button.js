import React from 'react'
import { Button as MuiButton,makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))
export default function Button(props) {
    const { text, size, color, variant, onClick,...other } = props;
    const classes=useStyles()
    return (
        <MuiButton
            size={size||"large"}
            color={color || "primary"}
            variant={variant||'contained'}
            onClick={onClick}
            classes={{root:classes.root,label:classes.label}}
            {...other}>
            {text}
        </MuiButton>
    )
}