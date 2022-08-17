import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Context from "../context";
import logo from "../img/logo.svg";

export default function Navbar({ id }) {

   const { isDark } = useContext(Context);

   const navbarVariants = {
      visible: {
         backgroundColor: isDark ? "#0071e2" : "#00C8E3",
         transition: {
            backgroundColor: { duration: 1 }
         }
      }
   }

   return (
      <motion.nav
         className="navbar"
         variants={navbarVariants}
         animate="visible"
      >
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
      </motion.nav>
   )
}