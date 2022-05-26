import { useEffect, useState } from "react";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://manufacturer-website-ks.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};
export default useGetProducts;
