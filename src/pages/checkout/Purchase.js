
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from '../../firebase.init';
import { useAuthState} from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";


const Purchase = () => {
  const [user] = useAuthState(auth);
  const { pId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${pId}`)
      .then((res) => setProduct(res.data));
  }, [pId]);

  const { name: productName, price, img, min_quan, avail } = product;
  const [quantity, setQuantity] = useState(parseInt(product.min_quan));
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    let order = { productName, quantity: quantity || min_quan, img, price, name:data.name, address: data.address, phone: data.phone, email: user.email, status: "pending"};
    const total_price = order.quantity * order.price;
    order = { ...order, total_price };
    console.log(order);
    fetch('http://localhost:5000/new-order', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.acknowledged)
      if(data.acknowledged) toast.success('Congrates!! Order Placed SuccessFully!')
    })
  };
  // if(errors) console.log(errors);
 

  return (
    <div className="px-2">
      <h3 className="text-3xl text-center text-dark py-12 px-4">
        Order the product
      </h3>

      <div className="card max-w-5xl mx-auto md:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="p-4" src={img} alt="Product" />
        </figure>
        <div className="card-body flex items-center justify-center">
          <h2 className="card-title">{productName}</h2>
          <div className="card-actions items-center justify-around">
            <div>
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
          <div className="flex items-center justify-between gap-4 ">
            
           
          </div>

      
        {/* form  */}
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 p-4">
        <input
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              type="number"
              defaultValue={min_quan}
              placeholder="Order Quantity"
              className="input input-bordered w-full"
             
            />
              <input   {...register("name", {required: true})}  placeholder="Name" defaultValue={user?.displayName} className="input input-bordered "  />
             <input  {...register("address", { required: true })} placeholder="Address" type="text"  className="input input-bordered " />
             <input  {...register("phone", { required: true })} placeholder="Phone" type="text"  className="input input-bordered " />
             <button
              disabled={quantity < min_quan || quantity > avail}
              className="btn btn-secondary"
            >
              Place Order
            </button>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Purchase;
