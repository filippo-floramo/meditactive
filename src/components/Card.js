import React from "react";
import { useContext } from "react";
import Context from "../context";
import { Link } from "react-router-dom"


export default function Card(props) {

   const { chill, isSleep } = useContext(Context);

   const style = {
      backgroundColor: isSleep ? "red" : "white"
   };




   return (
      <Link to="/meditate" className="route--link">
         <div onClick={() => chill(props.data.type)} className="card" style={style}>
            <h1>{props.data.type}</h1>
         </div>
      </Link>
   )
}