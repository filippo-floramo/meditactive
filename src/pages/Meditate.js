import React from "react";
import TimerDisplay from "../components/Timer/TimerDisplay";
import TimerWaves from "../components/Timer/TimerWaves";




export default function Meditate() {
   return (

      <main className="timer--container">
         <TimerDisplay />
         <TimerWaves />
      </main>
   )
}