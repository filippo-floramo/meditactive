import React, { useContext } from "react";
import TimerCountdown from "./TimerCountdown";
import TimerHandlers from "./TimerHandlers";
import TimerButtons from "./TimerButtons";
import Context from "../../context";





export default function TimerIndex() {

   const { isDark, isStarted } = useContext(Context);

   const style = {
      backgroundImage: isDark ?
         "linear-gradient(to right, #009ffd, #2480db, #2d62b8, #2e4595, #2a2a72)"
         :
         "linear-gradient(to right, #b3f6d8, #93e3d4, #77d0cf, #61bcc9, #52a7c1)",
      backgroundSize: "400%",
      animation: isStarted && "bg-animation 15s infinite alternate"
   }


   return (
      <section className="timer--container" style={style}>
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
      </section>
   )
}