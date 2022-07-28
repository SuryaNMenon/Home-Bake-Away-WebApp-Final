import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";

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
  background-color: teal;
  border-radius:16px;
  color: white;
  cursor: pointer;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    console.log(username,email,password)
    try {
      const res = await axios.post("/auth/register", {
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


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="First name" />
          <Input placeholder="last name"  />
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">CREATE</Button>
        </Form>
      <Button>
      <Link className="link" to="/login">
          Login
        </Link>
      </Button>
     {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
      </Wrapper>
    </Container>
  );
};

export default Register;
