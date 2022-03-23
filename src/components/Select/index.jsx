import {
  Select as SelectMui,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material'

const Select = ({
  children,
  helperText = null,
  register,
  name,
  label,
  error = '',
  defaultValue = '',
  ...rest
}) => {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel id={label}>{label}</InputLabel>
      <SelectMui
        defaultValue={defaultValue}
        name={name}
        {...register(name)}
        labelId={label}
        label={label}
        {...rest}
      >
        {children}
      </SelectMui>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}
export default Select
