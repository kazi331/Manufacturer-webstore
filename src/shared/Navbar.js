import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/about">About</Link> </li>
      <li> <Link to="/checkout">Checkout</Link> </li>
    </>
  );
  const profileItems= (
      <>
      <li><Link to="/profile">Sayem Khan</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/logout">Log Out</Link></li>
      </>
  )
  return (
    <div className="">
      <div class="navbar bg-base-100">
        {/* Mobile DropDown menu  */}
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img src="../../public/images/ssg.png" alt="" />
          <Link to="/">SSG Corporation</Link>
        </div>
        {/* Desktop menu  */}
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt=""
                />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
             {profileItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
