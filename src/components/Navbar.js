import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg"

export default function Navbar() {

   
/** Aggiugere modalità notte conditionale solo per il colore background, preferibile gradiente in entrambi casi */

   return (
      <nav className="navbar">
         <Link className="navbar--link  route--link"  to="/">
            <div className="navbar--content">
               <img src={logo} className="logo" alt="logo" />
               <h2 className="app--name">Meditactive</h2>
            </div>
         </Link>
      </nav>
   )
}