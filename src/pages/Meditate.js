import React from "react";
import TimerIndex from "../components/Timer/TimerIndex";
import Waves from "../components/Waves";
import Modal from "../components/Modal";



export default function Meditate() {
   return (
      <main>
         <Modal />  
         <TimerIndex />
         <Waves />        
      </main>
   )
}