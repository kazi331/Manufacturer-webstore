import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { pId } = useParams();
  //   console.log(pId);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProduct(res.data));
  }, []);
  //   useEffect(()=> {
  //       fetch('http://localhost:5000/products')
  //       .then(res=> res.json() )
  //       .then(data => setProduct(data))
  //   }, [])
  console.log(product);
  return (
    <div>
      <h3>Purchase page</h3>
      Product id: {pId}
    </div>
  );
};

export default Purchase;
