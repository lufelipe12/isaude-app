import { TextField } from "@mui/material";

const Input = ({
  name,
  label,
  register,
  error = "",
  helperText = "",
  // icon: Icon,
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
      />
    </>
  );
};
export default Input;
