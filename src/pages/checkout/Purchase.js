import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { pId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/product/${pId}`).then(res => setProduct(res.data))
  }, [pId]);


const {name, price, img, min_quan, avail} = product;
  const [quantity, setQuantity] = useState(parseInt(product.min_quan));

  // create new order object and place order 
  const placeOrder = () => {
    let order = { name, quantity: quantity || min_quan, img, price };
    const total_price =  order.quantity * order.price;
    order = {...order, total_price}
    console.log(order);

    // axios.post(`http://localhost:5000/new-order`, order).then((res) => console.log(res));
    // fetch('http://localhost:5000/neworder', {
    //   method: 'POST', 
    //   headers: {'content-type' : 'application.json'},
    //   body: JSON.stringify(order)
    // })
    // .then(res=>  res.json())
    // .then(data => console.log(data))
  };



  return (
    <div className="px-2">
      <h3 className="text-3xl text-center text-dark py-12 px-4">
        Order the  product 
      </h3>

      <div className="card max-w-4xl mx-auto md:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="p-4" src={img} alt="Album" />
        </figure>
        <div className="card-body flex items-center justify-center">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions items-center justify-around">
            <div className="">
              <p>
                Price: ${price}
                <sub> /item</sub>
              </p>
            </div>
            <div className="flex gap-4 py-2">
              <div
                className="badge badge-outline tooltip"
                data-tip="Min order quantity"
              >
                Min: {min_quan}
              </div>
              <div
                className="badge badge-outline tooltip"
                data-tip="Available quantity"
              >
                Av: {avail}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <input
              onChange={(e) => {
                e.preventDefault();
                setQuantity(parseInt(e.target.value))
              }}
              type="number"
              defaultValue={min_quan}
              placeholder="Order Quantity"
              className="input input-bordered w-full max-w-md"
            />
            <button onClick={placeOrder} disabled={quantity < min_quan || quantity > avail} className="btn btn-secondary">
              Place Order
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Purchase;
