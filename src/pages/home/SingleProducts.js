import React from "react";
import { Link } from "react-router-dom";

const SingleProducts = ({p}) => {
  console.log(p.id);
  return (
    <div className="card max-w-max mx-auto bg-base-100 shadow hover:shadow-lg">
      <figure>
        <img src={p.img} alt="Shoes" />
      </figure>
      <div className="card-body p-">
        <p>Price: ${p.price}<sub> /item</sub></p>
        <h2 className=""> {p.name}</h2>
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <Link to={`purchase/${p._id}`} className="btn btn-sm btn-active text-white">Order</Link>
          <div className="card-actions justify-end">
            <div className="badge badge-outline tooltip" data-tip="Min order quantity">Min: {p.min_quan}</div>
            <div className="badge badge-outline tooltip" data-tip="Available quantity">Av: {p.avail}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
