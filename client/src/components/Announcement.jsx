import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  // height: 30px;
  background-color: white;
  color: black;
  // display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Marcontainer = styled.div`
  // height: 30px;
  padding:5px 0px;
  background-color: black;
  color: white;
  // display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const H4 = styled.h4`

`;


const Announcement = () => {
  const user = useSelector((state) => state.user.currentUser)
 
  return (<Container>
            <Marcontainer>
            <marquee>{user ? <H4>Hi, {user.username}</H4>:"Now accepting online orders!"}</marquee>
            </Marcontainer>
            {/* <div style={{backgroundColor:"white",color:"black"}}></div> */}
          </Container>);
};

export default Announcement;
