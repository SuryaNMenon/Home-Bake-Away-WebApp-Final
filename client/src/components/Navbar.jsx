import { Badge } from "@material-ui/core";
import { LinkedCamera, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import log from "../img/homebakeaway.png";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 120px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;

const Language = styled.span`
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Container>
      <Wrapper>
        <Left>
        <Link to="/" style={{textDecoration:"none", color:"black"}}><img src={log} height={100} width={150} /></Link>
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Link to="/" style={{textDecoration:"none", color:"black"}}><Logo>HomeBakeAway.</Logo></Link>
        </Center>
        <Right>
          <Link to="/register" style={{textDecoration:"none", color:"black"}}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to={user ? "/" : "/login"} style={{textDecoration:"none", color:"black"}}>
            <MenuItem>{user ? "SIGN OUT" : "SIGN IN"}</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
