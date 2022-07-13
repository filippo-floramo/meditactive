import React from "react";
import TimerCountdown from "./TimerCountdown";




export default function TimerDisplay() {




   return (
      <div className="time--display">
         <div className="time">
            <TimerCountdown  />
         </div>
         <div className="play">
            Caiso
         </div>
      </div>
   )
}