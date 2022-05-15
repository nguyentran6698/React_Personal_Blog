import React, { useState } from "react";
import { TextField, FormControl, Typography, Button } from "@mui/material";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../firebase-config";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import Dashboard from "../components/DashBoard";
const Login = () => {
  const [message, setMesage] = useState({ type: "", msg: "" });
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const { userAuth, setUserAuth } = useGlobalContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)
      .then(({ user }) => {
        setUserAuth({ ...user });
        setUserLogin({ email: "", password: "" });
        navigate(state?.path || "/dashboard");
      })
      .catch((reject) => {
        console.log(reject.message);
      });
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserAuth(user);
    }
  });
  if (userAuth) {
    return <Dashboard />;
  }
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
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </FormControl>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 1350px;
  .form-control {
    h2 {
      margin: 1rem 0 0.5rem 0;
    }
    width: 50%;
    margin: 0 auto;
    display: grid;
    row-gap: 1rem;
  }
`;
export default Login;
