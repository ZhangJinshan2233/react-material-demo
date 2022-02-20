import React from 'react'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
export default function DatetimePicker(props) {
    const { label, value, onChange, name } = props;
    const convertToDefaultPara = (name, value) => ({
        target: {
            name,
            value
        }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                format="MM/dd/yyyy"
                margin="normal"
                name={name}
                label={label}
                value={value}
                onChange={date => onChange(convertToDefaultPara(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
}
