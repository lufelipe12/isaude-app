import { TextField } from "@mui/material";

const Input = ({ name, label, register = "", ...rest }) => {
  return (
    <>
      <TextField
        name={name}
        label={label}
        {...register(name)}
        variant="outlined"
        fullWidth
        {...rest}
      />
    </>
  );
};
export default Input;
