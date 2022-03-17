import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

const Input = ({
  name,
  label,
  register,
  error = "",
  helperText = "",
  Icon,
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
        InputProps={
          Icon && {
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <Icon />
              </InputAdornment>
            ),
          }
        }
      />
    </>
  );
};
export default Input;
