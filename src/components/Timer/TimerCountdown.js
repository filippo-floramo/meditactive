import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import Context from "../../context";
import { useContext } from "react";
import TimerHandlers from "./TimerHandlers";


export default function TimerCountdown() {

   const { countdown, timerCount} = useContext(Context)

console.log("rirenderizzato");

   const renderer = ({ minutes, seconds }) => {



      return (
         <div className="time--display">
            <div className="timer">
               <h3 className="timer--count">{zeroPad(minutes)}:{zeroPad(seconds)}</h3>
               <button className="timer--set">Set</button>
            </div>
            <TimerHandlers/>
         </div>
      )

   };

   return (
      <Countdown
         date={Date.now() + timerCount}
         renderer={renderer}
         autoStart={false}
         ref={countdown}
         controlled={false}

      />
   )
};