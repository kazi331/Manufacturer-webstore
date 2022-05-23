import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pt-4">
          {/* <!-- Page content here --> */}
          <div className="flex items-center justify-between p-4">
            <h2 className="text-3xl text-center font-bold">Dashboard</h2>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-md btn-accent drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto min-w-fit w-52 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="">My Orders</Link>
            </li>
            <li>
              <Link to="my-reviews">My Reviews</Link>
            </li>
            <li>
              <Link to="add-review">Add review</Link>
            </li>
            <li>
              <Link to="user-profile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
