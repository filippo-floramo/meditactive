import React from "react";
import TimerIndex from "../components/Timer/TimerIndex";
import Waves from "../components/Waves";
import Modal from "../components/Modal";
import {motion} from "framer-motion";

const meditateVariants = {
   hidden: { opacity: 0.2 },
   visible: {
      opacity: 1,
      transition: {
         opacity: {duration: 1}
      }
   }

}


export default function Meditate() {
   return (
      <motion.main
         variants={meditateVariants}
         initial="hidden"
         animate="visible"
         >
         <Modal />  
         <TimerIndex />
         <Waves />        
      </motion.main>
   )
}