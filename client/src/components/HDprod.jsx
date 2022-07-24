import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import styled from "styled-components";
  
  const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius:5%;
  
`;

const Container = styled.div`
  
  margin: 15px;
  width: 305px;
  height: 423px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  background-image: url('${(props) => props.bg}');
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center top;
  position: relative;
  box-sizing:border-box;
  text-align:center;
  border-radius:10px;

  &:hover ${Info}{
    opacity: 1;    
  }
`;




const Border = styled.div`
  border:1px solid rgba(255,255,255,0.5);
  border-radius:10px;
  
  height:90%;
  width:90%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  margin-top: auto;
  top:0;
  margin-bottom: auto;
  bottom:0;
  text-align: center;
  position:absolute;
  }
  `;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 100%;
  width:100%;
  
  
  
 object-fit:cover;
  
  align-items:center;
  text-align:center;



`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const P = styled.div`

  color:white;
  padding-top:10%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  position:absolute;
`;
  
  const HDprod = ({ item }) => {
    return (
      <Container bg={item.img}>
        <Border></Border>
       {/* <Circle />*/}
        {/*<Image src={item.img} />*/}
        <Info>
          <Icon>
            <Link to={`/product/${item._id}`}>
            <SearchOutlined />
            </Link>
          </Icon>
        </Info>
        <P><h2>{item.title}</h2></P>
      </Container>
    );
  };
  
  export default HDprod;
  