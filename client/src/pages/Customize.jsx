import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: inline-block;
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

const TextBox = styled.textarea`
flex: 1;min-width: 84%;
margin: 10px 5px;
padding: 10px;
background: rgba(255, 255, 255, 0.80);
border-radius: 16px;
style={{ width: 200 }}
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.7px);
-webkit-backdrop-filter: blur(5.7px);
border: 1px solid rgba(255, 255, 255, 0.02);
`;

const Container = styled.div``;

const Wrapper = styled.div`
  width:100%;
  display: inline-block;
  text-align:center;
  padding:50px 0px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Button = styled.button`
    display:block;  
    padding: 15px;
    margin:auto;
    border: 2px solid teal;
    border-radius:10px;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
     background-color: #f8f4f4;
  }
`;

//change mail id 

const Customize = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>MAKE YOUR OWN CAKE</Title>
        <Form action="https://formsubmit.co/3ac11e2726e663d489c21fc8377e8dd1" method="POST">
          <Input placeholder="name" name="Name" />
          <Input placeholder="phone number" name="Phone Number"/>
          <Input placeholder="cake flavour" name="Cake Flavour"/>
          <Input placeholder="colour" name="Colour of Cake"/>
          <TextBox placeholder="message on cake" name="Message on Cake"/>
          <TextBox placeholder="notes" name="Additional Notes"/>
          <Button>SUBMIT</Button>
        </Form>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Customize;
