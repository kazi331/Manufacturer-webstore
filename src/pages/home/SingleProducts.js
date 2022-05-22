import React from "react";

const SingleProducts = ({p}) => {
  return (
    <div className="card max-w-max mx-auto bg-base-100 shadow hover:shadow-lg">
      <figure>
        <img src={p.img} alt="Shoes" />
      </figure>
      <div className="card-body p-">
        <p>Price: ${p.price}</p>
        <h2 className="card-title"> {p.name}</h2>
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <button className="btn btn-sm btn-active btn-primary">Buy Now</button>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Min: {p.min_quan}</div>
            <div className="badge badge-outline">Av: {p.avail}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
