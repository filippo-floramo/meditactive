import React from "react";
import TimerDisplay from "../components/Timer/TimerDisplay";
import TimerButtons from "../components/Timer/TimerButtons";
import TimerWaves from "../components/Timer/TimerWaves";




export default function Meditate() {
   return (

      <main className="timer--container">
         <div className="timer--container--sections">

            <TimerButtons
               seconds="-30s"
               minutes="-5min"
               minutesValue={300000}
               secondsValue={30000}
               type="decrement"
            />
            <TimerDisplay />
            <TimerButtons
               seconds="+30s"
               minutes="+5min"
               secondsValue={30000}
               minutesValue={300000}
               type="increment"
            />

         </div>
         <TimerWaves />
      </main>
   )
}