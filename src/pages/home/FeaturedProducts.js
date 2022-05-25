import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../shared/Loader";
import SingleProducts from "./SingleProducts";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data));
  }, []);
  products.length = 8;

  return (
    <div className="mt-24 mx-4">
      <h2 className="text-center text-dark-600 text-4xl font-bold">
        Featured Products
      </h2>
      <p className="text-dark-200 text-center">Browser Our Top Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
        {products.length < 1 && <Loader />}
        {products?.map((p, index) => (
          <SingleProducts key={index} p={p} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
