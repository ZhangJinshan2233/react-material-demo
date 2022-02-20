import { FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core'
import React from 'react'

export default function Checkbox(props) {
  const { label, value, onChange, name } = props;
  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value
    }
  })
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={value}
          onChange={e => onChange(convertToDefaultPara(name, e.target.checked))}
          name={name}
          color="primary"
        />
      }
      label={label}
    />
  )
}
