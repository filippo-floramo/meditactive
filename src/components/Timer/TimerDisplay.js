import React from "react";
import TimerCountdown from "./TimerCountdown";
import TimerHandlers from "./TimerHandlers";
import TimerButtons from "./TimerButtons";




export default function TimerDisplay() {




   return (
      <div className="timer--container--sections">
         <TimerButtons
            seconds="-30s"
            minutes="-5min"
            minutesValue={300000}
            secondsValue={30000}
            type="decrement"
         />
         <div className="time--display">
            <TimerCountdown />
            <TimerHandlers />
         </div>
         <TimerButtons
            seconds="+30s"
            minutes="+5min"
            secondsValue={30000}
            minutesValue={300000}
            type="increment"
         />
      </div>
   )
}