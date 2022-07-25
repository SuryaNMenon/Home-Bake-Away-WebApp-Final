import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import HDprod from "./HDprod";
import axios from "axios";

const Container = styled.div`
padding: 50px;
display: flex;
flex-wrap: wrap;
align-items:center;
padding-left:10%;
padding-right:10%;
justify-content: center;
  background-color:#f5fbfd;

`;

const Homedisplay = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        console.log(res);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <HDprod item={item} key={item.id} />)
        : products
            .slice(0, 6)
            .map((item) => <HDprod item={item} key={item.id} />)}
    </Container>
  );
};

export default Homedisplay;
