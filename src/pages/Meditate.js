import React from "react";
import TimerDisplay from "../components/Timer/TimerDisplay";
import TimerButtons from "../components/Timer/TimerButtons";
import TimerWaves from "../components/Timer/TimerWaves";




export default function Meditate() {
   return (

      <main className="timer--container">
         <div className="timer--container--sections">

            <TimerButtons secs="-30s" min="-5min" type="decrement" />
            <TimerDisplay />
            <TimerButtons secs="+30s" min="+5min" type="increment" />

         </div>
         <TimerWaves />
      </main>
   )
}