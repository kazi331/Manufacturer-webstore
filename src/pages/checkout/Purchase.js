import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { pId } = useParams();
  //   console.log(pId);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${pId}`)
      .then((res) => setProduct(res.data));
  }, [pId]);
  console.log(product);
 
  return (
    <div className="px-2">
      <h3 className="text-3xl text-center text-dark py-12 px-4">Order Product</h3>

      <div class="card max-w-4xl mx-auto md:card-side bg-base-100 shadow-xl">
      <figure><img className="p-4" src={product.img} alt="Album" /></figure>
      <div class="card-body flex items-center justify-center">
        <h2 class="card-title">{product.name}</h2>
           <div class="card-actions items-center justify-around">
              <div className=""><p>Price: ${product.price}<sub> /item</sub></p></div>
              <div className="flex gap-4 py-2">
              <div className="badge badge-outline tooltip" data-tip="Min order quantity">Min: {product.min_quan}</div>
              <div className="badge badge-outline tooltip" data-tip="Available quantity">Av: {product.avail}</div>
              </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input type="number" defaultValue={product.min_quan} placeholder="Order Quantity" class="input input-bordered w-full max-w-md" />
            <button className="btn btn-secondary">Place Order</button>
          </div>
      </div>
    </div>

    </div>
  );
};

export default Purchase;
