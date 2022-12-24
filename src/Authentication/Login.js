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
  const [message, setMessage] = useState(false);
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
        console.log(reject);
        setMessage(!message);
        const timeout = setTimeout(() => {
          setMessage(false);
        }, 2000);
        return () => clearTimeout(timeout);
      });
    setUserLogin({ email: "", password: "" });
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
        {message && (
          <p className="messageLogin">Error: Password or Email is Invalid</p>
        )}
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
  margin: 2.5rem auto;
  .form-control {
    h2 {
      text-align: center;
    }
    width: 50%;
    margin: 0 auto;
    display: grid;
    row-gap: 0.75rem;
    .messageLogin {
      color: red;
      margin-bottom: 0.375rem;
    }
  }
`;
export default Login;
