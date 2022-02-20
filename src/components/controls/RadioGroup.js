import {
    RadioGroup as MuiRadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel
} from '@material-ui/core'
import React from 'react'

export default function (props) {
    const { name,label, value, onChange, items } = props
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <MuiRadioGroup row name={name} value={value} onChange={onChange}>
                {
                    items.map(item => (
                        <FormControlLabel  key={item.id}value={item.id} control={<Radio />} label={item.title} />
                    ))
                }
            </MuiRadioGroup>
        </FormControl>

    )
}
