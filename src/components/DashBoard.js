import React from "react";
import { auth, signOut } from "../firebase-config";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import dateFormat from "dateformat";
import { useGlobalContext } from "../context";
const DashBoard = () => {
  const { userAuth, setUserAuth } = useGlobalContext();

  let navigate = useNavigate();
  const {
    metadata: { createdAt, lastLoginAt },
    email,
    uid,
  } = userAuth;

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUserAuth(null);
      navigate("/auth/login");
    });
  };
  return (
    <Wrapper>
      <h2>This is dashboard for loginUser</h2>
      <p>Emai: {email}</p>
      <p>UserID: {uid}</p>
      <p>
        Login At:{" "}
        {dateFormat(parseInt(createdAt), "dddd, mmmm dS, yyyy, h:MM:ss TT")}
      </p>
      <p>
        Last Login At:{" "}
        {dateFormat(parseInt(lastLoginAt), "dddd, mmmm dS, yyyy, h:MM:ss TT")}
      </p>
      <Button onClick={handleSignOut}>SignOut</Button>
      <Link to="/blogs/BlogEdit">Edit</Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  h2 {
    width: 100%;
  }
`;
export default DashBoard;
