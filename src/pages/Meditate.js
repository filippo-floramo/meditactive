import React from "react";
import TimerDisplay from "../components/Timer/TimerDisplay";
import TimerWaves from "../components/Timer/TimerWaves";
import Modal from "../components/Modal";



export default function Meditate() {
   return (
      <>
         <Modal />
         <main className="timer--container">
            <TimerDisplay />
            <TimerWaves />
         </main>
      </>
   )
}