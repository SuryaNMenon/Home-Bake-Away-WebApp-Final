import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";

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
  width: 25%;
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
  text-align:center;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 75%;
  margin: 10px 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.80);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.02);
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 15px;
  margin:30%;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 8px;
  margin-top: 6px;
  border-radius: 16px;
`;

// const Link = styled.a`
//   margin: 5px 2px;
//   font-size: 10px;
//   color:grey;
//   text-decoration: none;
//   cursor: pointer;
// `;

const Error = styled.span`
  color: red;
  font-size:10px;
  padding:5px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link to="/register" style={{textDecoration:"none", color:"black",fontSize:"10px"}}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;