import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom"
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HomeBakeAway</Logo>
        <Desc>
        The official web-page for the home-based bakery hosted in Trivandrum by Usha Arun - HomeBakeAway! Follow us below for timely updates regarding our menu. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nemo totam. Blanditiis alias, nobis esse, praesentium, mollitia veritatis fugiat culpa omnis impedit nesciunt vero laboriosam nisi? Rem officiis ipsa, aliquid dolorem eum dolore quisquam odit doloremque numquam eius quas maiores ullam? 
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></ListItem>
          <ListItem><Link to="/cart" style={{textDecoration:"none", color:"black"}}>Cart</Link></ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> SNRA 56, Mukkolakkal, Trivandrum
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 9633433337
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> homebakeaway@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
