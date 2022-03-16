import { Select as SelectMui, InputLabel, FormControl } from '@mui/material'

const Select = ({ children, label, ...rest }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={label}>{label}</InputLabel>
      <SelectMui labelId={label} label={label}>
        {children}
      </SelectMui>
    </FormControl>
  )
}
export default Select
