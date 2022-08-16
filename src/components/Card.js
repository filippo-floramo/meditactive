import React from "react";
import { useContext } from "react";
import Context from "../context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"




export default function Card(props) {
   const cardVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            delay: 1,
            opacity: { duration: 1.5 }
         }
      },
      exit: {
         scale: 0.1,
         transition: {
            scale: { duration: 2 }
         }
      }
   }

   const { pickMode } = useContext(Context);




   return (
      <Link to="/meditate" className="route--link">
         <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => pickMode(props.data.type)}
            className="card"
         >
            <img className="card--img" src={props.data.icon} alt="Deep or Light meditation" />
            <h1 className="card--type">{props.data.type}</h1>
         </motion.div>
      </Link>
   )
}