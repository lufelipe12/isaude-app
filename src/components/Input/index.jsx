import {TextField} from "@mui/material"

const Input = ({
  name,
  label,
  register,
  error = "",
  helperText = "",
  icon: Icon,
  date = false,

  ...rest
}) => {
  return (
    <>
      <TextField
        name={name}
        label={label}
        {...register(name)}
        variant="outlined"
        fullWidth
        error={!!error}
        helperText={helperText}
        {...rest}
        InputLabelProps={
          date && {
            shrink: true,
          }
        }
      />
    </>
  )
}
export default Input