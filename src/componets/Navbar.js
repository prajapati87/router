import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Login } from "./Login";
import Signup from "./Signup";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" >
          PrinceCoder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="mx-2 me-auto ">
            <button
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#loginModal"
            >
              Login
            </button>
            <button
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#signupModal"
            >
              SignUp
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
      <Login />
      <Signup />
    </>
  );
};
