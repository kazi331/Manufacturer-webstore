import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import deleteIcon from "../../images/icons/delete-bin-4-line.svg"

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);
    useEffect(()=> {
        axios.get(`http://localhost:5000/my-orders/${user?.email}`).then(res=> {
            console.log(res.data);
            setOrders(res.data)
        })
    }, [user?.email])

    const deleteOrder = (id) => {
        axios.delete(`http://localhost:5000/order/${id}`, {method: 'delete'})
        .then(res=>{
             if(res.data.deletedCount) {
                toast.warn('Order Deleted')
                axios.get(`http://localhost:5000/my-orders/${user?.email}`).then(res=> {
               
                setOrders(res.data)
             })
            }
        })
      
    }
 

    return (
        <div>
           <h2 className="text-3xl my-4">My Orders </h2>
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          SL
        </th>
        <th>Image</th>
        <th>Product</th>
        <th>U.Price</th>
        <th>Quantity</th>
        <th>T.price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
          orders.map((order, index) => 
            <tr key={index} orders={orders}>
        <td>
            {index+1}
        </td>
        <td>
          {orders.length ? <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={order.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div> : <span> No  ordr found</span>}
        </td>
        <td className="font-bold text-sm max-w-xs">{order.productName}</td>
        <td>${order.price}</td>
        <td>{order.quantity}</td>
        <td>${order.total_price}</td>
        <td>{order.status}</td>
        <td>
            <label for="delete-confirm" className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200"
            onClick={()=> deleteOrder(order._id)} > 
                <img src={deleteIcon} alt="" />
            </label>
        </td>
      </tr>  
          
  ) }
 </tbody>
    <tfoot>
    <tr>
        <th>
          SL
        </th>
        <th>Image</th>
        <th>Product</th>
        <th>U.Price</th>
        <th>Quantity</th>
        <th>T.Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </tfoot>
  </table>
</div>
  {/* confirm modal  */}
  

</div>
 );
};

export default MyOrders;