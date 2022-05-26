import React from "react";
import useGetProducts from "../../hooks/useGetProducts";
import Loader from "../../shared/Loader";
import SingleProducts from "./SingleProducts";

const FeaturedProducts = () => {
  const [products]  = useGetProducts(); 
 
  if (products.length < 1) {
    return (
      <div className="flex items-center justify-center ">
        <Loader />
      </div>
    );
  }
  products.length = 8;
  return (
    <div className="mt-24 mx-4">
      <h2 className="text-center text-dark-600 text-4xl font-bold">
        Featured Products
      </h2>
      <p className="text-dark-200 text-center">Browser Our Top Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
        {products?.map((p, index) => (
          <SingleProducts key={index} p={p} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
