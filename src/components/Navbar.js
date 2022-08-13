import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg"

export default function Navbar({ id }) {


   return (
      <nav className="navbar">
         {
         id === "meditate" ?
            <Link className="navbar--link route--link" to="/">
               <div className="navbar--content">
                  <img src={logo} className="logo alt-logo" alt="logo" />
               </div>
            </Link>
            :
            <div className="navbar--content">
               <img src={logo} className="logo" alt="logo" />
               <h2 className="app--name">Meditactive</h2>
            </div>
         }
      </nav>
   )
}