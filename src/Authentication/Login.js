import React from "react";
import { TextField, FormControl, Typography, Button } from "@mui/material";
import styled from "styled-components";
const Login = () => {
  const [auth, setAuth] = React.useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };
  console.log(auth);

  return (
    <Wrapper>
      <FormControl fullWidth={true} className="form-control">
        <Typography variant=" h2" component="h2">
          Login
        </Typography>

        <TextField
          id="outlined=basic"
          label="Email Address"
          variant="outlined"
          onChange={handleChange}
          name="email"
        />
        <TextField
          id="outlined=basic"
          label="Password"
          variant="outlined"
          onChange={handleChange}
          name="password"
        />
        <Button variant="contained">Login</Button>
      </FormControl>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 1400px;
  .form-control {
    h2 {
      margin-bottom: 1rem;
    }
    width: 60%;
    margin: 0 auto;
    display: grid;
    row-gap: 1rem;
  }
`;
export default Login;
