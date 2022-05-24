import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import deleteicon from '../../images/icons/delete-bin-4-line.svg'

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/review').then(res => setReviews(res.data))
    }, [])
    const deleteReview = (id) => {
        const proceed = window.confirm('Are you sure?')
        if(proceed) {
        axios.delete(`http://localhost:5000/review/${id}`).then(res => {
        if(res.data.acknowledged){
            toast.info('Review Deleted');
                axios.get('http://localhost:5000/review').then(res => {
                    setReviews(res.data)
                    console.log(res.data);
                })
          } 
     })
    }
    }
    return (
        <div className='px-2'>
           <h2 className='text-center text-3xl font-bold my-12'>Manage Reviews</h2>
           <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
                <th>SL</th>
                <th>rating</th>
                <th>review</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length < 1 && (
              <tr>
                <td colSpan="100%">
                  <p className="p-12 text-xl  flex items-center justify-center">
                    No Reviews found !!
                    <Link className="ml-2 link link-primary" to="/products">
                      Order Now
                    </Link>
                  </p>
                </td>
              </tr>
            )}
            {reviews.map((review, index) => (
              <tr key={index} reviews={reviews}>
                <td>{index + 1}</td>
                <td>{review.rating}</td>
                <td className='max-w-md overflow-x-auto'>{review.review}</td>
                <td>{review.name}</td>
                <td>
                <button
                  htmlFor="delete-modal"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200"
                    onClick={()=> deleteReview(review._id)}
                >
                  <img src={deleteicon} alt="" />
               </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>SL</th>
              <th>rating</th>
              <th>review</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
        </div>
    );
};

export default ManageReviews;