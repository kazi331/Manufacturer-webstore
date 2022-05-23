import React from "react";
import { Link } from "react-router-dom";

const SingleProducts = ({p}) => {
  // console.log(p.id);
  return (
    <div className="card max-w-max mx-auto bg-base-100 shadow hover:shadow-lg">
          <div className="card-actions justify-between p-2">
            <div className="badge badge-outline text-gray-500 tooltip tooltip-accent tooltip-right" data-tip="Min order quantity">Min: {p.min_quan}</div>
            <div className="badge badge-outline text-gray-500 tooltip tooltip-accent tooltip-left" data-tip="Available quantity">Av: {p.avail}</div>
          </div>
      <figure>
        <img src={p.img} alt="Shoes" />
      </figure>
      <div className="card-body p-">
        <p>Price: ${p.price}<sub> /item</sub></p>
        <h2 className=""> {p.name}</h2>
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <Link to={`purchase/${p._id}`} className="btn btn-sm btn-active text-white">Buy Now</Link>
          
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
