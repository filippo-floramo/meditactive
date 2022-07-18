import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import Context from "../../context";
import { useContext } from "react";
import TimerHandlers from "./TimerHandlers";


export default function TimerCountdown() {

   const { countdown, setIsPlay, isPlay } = useContext(Context)

console.log("rirenderizzato");

   const renderer = ({ minutes, seconds }) => {


      return (
         <div className="time--display">
            <div className="timer">
               <h3>{zeroPad(minutes)}:{zeroPad(seconds)}</h3>
            </div>
            <TimerHandlers/>
         </div>
      )

   };

   return (
      <Countdown
         date={Date.now() + isPlay}
         renderer={renderer}
         autoStart={false}
         ref={countdown}
         controlled={false}

      />
   )
};