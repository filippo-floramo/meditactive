import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg"

export default function Navbar() {


   return (
      <div className="navbar">
         <Link className="navbar--link"  to="/">
            <div className="navbar--content">
               <img src={logo} className="logo" alt="logo" />
               <h2 className="app--name">Meditactive</h2>
            </div>
         </Link>
      </div>
   )
}