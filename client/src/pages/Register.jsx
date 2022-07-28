import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";

import React, { useEffect } from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  text-align:center;
  width: 40%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.80);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.02);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 5px;
padding: 10px;
background: rgba(255, 255, 255, 0.80);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.7px);
-webkit-backdrop-filter: blur(5.7px);
border: 1px solid rgba(255, 255, 255, 0.02);
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  margin-top: 10px;
  margin-left:5px;
  padding: 10px 15px;
  background-color: black;
  border-radius:16px;
  color: white;
  cursor: pointer;
  transition-duration:0.5s;
  transition-timing-function: linear;

`;

const Error = styled.span`
  color: red;
  font-size:10px;
  padding:5px;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    if (isCPasswordDirty) {
        if (password === cPassword) {
            setShowErrorMessage(false);
            setCPasswordClass('form-control is-valid')
        } else {
            setShowErrorMessage(true)
            setCPasswordClass('form-control is-invalid')
        }
    }
}, [cPassword])

const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
}



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    console.log(username,email,password)
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      
      res.data && window.location.replace("/login");
    } 
    catch (err) {
      setError(true);
    }
  };



  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="first name" />
          <Input placeholder="last name"  />
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Input type = "password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <Input type ="password" placeholder="confirm password" onChange={handleCPassword}/>
          <Button type="submit" >SIGNUP</Button>
        </Form>

        <Link className="link" to="/login" style={{textDecoration:"none"}}>
      <Button style={{backgroundColor: isHovering ?"rgba(237, 237, 237,0.8)":"rgba(255,255,255,0.9)" ,color:"black"}}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Login with an existing account
      </Button>
      </Link>
      {showErrorMessage && isCPasswordDirty ? <div style={{color:"red", marginTop:"10px"}}> Passwords did not match </div> : ''}

     {error && <div style={{color:"red", marginTop:"10px"}}>Something went wrong!</div>}
      </Wrapper>
    </Container>
  );
};

export default Register;
