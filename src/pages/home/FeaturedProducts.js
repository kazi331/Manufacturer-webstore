import React, { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";

const FeaturedProducts = () => {
  //     const links = [
  //         https://i.ibb.co/qkXjRYW/2-n-3-pin-socket-with-switch-400x400.png
  // https://i.ibb.co/wdTWpyc/3-PIN-FLAT-400x400.png
  // https://i.ibb.co/4fNMDrK/APPLE-SHAPE-pin-400x400.png
  // https://i.ibb.co/n6Lb31K/bel-pushed-400x400.png
  // https://i.ibb.co/X4ctFGv/Classic-Pro-1200x800-400x400.png
  // https://i.ibb.co/hs7FH4L/DECORATIVE-BIG-BATTEN-HOLDER-B22-01-400x400.png
  // https://i.ibb.co/2dKHCFh/DOORBELL-400x400.png
  // https://i.ibb.co/8dfym7N/Four-Gang-One-Way-400x400.png
  // https://i.ibb.co/kc6DS2f/Four-gang-one-way-400x400.png
  // https://i.ibb.co/5K1gv4C/Hexagon-Holder-B-22-1-400x400.png
  // https://i.ibb.co/ZJyZPMp/Lotus-Universal-Socket-400x400.png
  // https://i.ibb.co/mbd9xHx/Motion-Senser-LED-400x400.png
  // https://i.ibb.co/X2GTwYd/Motion-sensor-1-400x400.png
  // https://i.ibb.co/bvzyRND/Mounting-Junction-Box-400x400.png
  // https://i.ibb.co/dcVNXdM/Rose-1-Gang-2-Way-400x400.png
  // https://i.ibb.co/G9p3JVk/Rose-4-Gang-1-Way-400x400.png
  // https://i.ibb.co/55x9W0L/Round-2-Pin-Socket-400x400.png
  // https://i.ibb.co/VCwDZfm/Safe-2-Pin-Socket-with-nean-400x400.png
  // https://i.ibb.co/71F86J5/Sillver-line-02-1-400x400.png
  // https://i.ibb.co/GHGxNdn/tester-medium-400x400.png
  // https://i.ibb.co/vQ1226T/ULTIMATE-23-PIN-MULTI-SOCKET-WITH-1-USB-1-400x400.png
  // https://i.ibb.co/cC0Ct3s/ULTIMATE-FAN-REGULATOR-1-400x400.png
  //     ]
  
  const [products, setProducts] = useState([])
  useEffect(()=> {
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data=> {
          console.log(data);
          setProducts(data)
      })
  }, [])
  products.length = 8;
//   console.log(JSON.stringify(products));
  return (
    <div className="mt-24 mx-4">
      <h2 className="text-center text-dark-600 text-4xl font-bold">
        Featured Products
      </h2>
      <p className="text-dark-200 text-center">Browser Our Top Products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        {products.map((p, index) => (
          <SingleProducts key={index} p={p} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
