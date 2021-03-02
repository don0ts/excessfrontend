import React, { Component } from "react";
import Logo from "./excesslogo.png";
import Router, { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <style>
          {`
    .nav-bg {
        background: linear-gradient(49deg, rgb(250, 250, 250) 20%, rgb(240, 240, 240) 100%);
    }
    .navbar-dark {
        padding: 0;
    }
    .imgAdjustments {
      margin: 10px 20px 10px 30px;
      width: 125px;
      height: auto;
    }

   @media only screen and (max-width: 400px) {
    .imgAdjustments {
      margin: 5px 10px 5px 15px;
      width: 50px;
      height: auto;
    }
    .h4 {
      font-size: 1.15rem;
    }
   }
    `}
        </style>
        <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
          <div className="navbar-brand" href="#">
            <Link style={{ textDecoration:'none', color: 'white' }} to="/">
            <span className="h4">
              <img src={Logo} className='imgAdjustments' alt="eXcess logo" />{" "}
              
            </span>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;