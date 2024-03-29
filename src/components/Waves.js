import React, { useContext } from "react";
import { motion } from "framer-motion";
import Context from "../context";
import Wave from "react-wavify";


export default function Waves() {

   const { isStarted } = useContext(Context);

   const waveVariants = {

      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            opacity: { duration: 15 }
         }
      },
   }

   return (

      isStarted &&
      (
         <motion.div
            className="wave--container"
            variants={waveVariants}
            animate="visible"
            initial="hidden">
            <Wave
               className="wave--one"
               fill="url(#a)"
               options={
                  {
                     points: 2,
                     amplitude: 60
                  }
               }>
               <defs>
                  <linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
                     <stop stopColor="#20A4F3" stopOpacity=".25" offset="0%" />
                     <stop stopColor="#182B3A" offset="100%" />
                  </linearGradient>
               </defs>
            </Wave>
            <Wave
               className="wave--two"
               fill="url(#a)"
               options={
                  {
                     points: 2,
                     amplitude: 40
                  }
               }>
               <defs>
                  <linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
                     <stop stopColor="#20A4F3" stopOpacity=".25" offset="0%" />
                     <stop stopColor="#182B3A" offset="100%" />
                  </linearGradient>
               </defs>
            </Wave>
         </motion.div>
      )
   )
}