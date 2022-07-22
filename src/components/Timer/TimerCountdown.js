import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import Context from "../../context";
import { useContext } from "react";


export default function TimerCountdown() {

   const { countdown, timerCount, setIsStarted, setShowModal } = useContext(Context);

   console.log("rirenderizzato");

   const renderer = ({ minutes, seconds, hours }) => {

      return (
            <div className="timer">
               <h3 className="timer--count">{hours > 0 && `${hours}:`}{zeroPad(minutes)}:{zeroPad(seconds)}</h3>
            </div>
      )

   };

   return (
      <Countdown
         date={Date.now() + timerCount}
         renderer={renderer}
         autoStart={false}
         ref={countdown}
         onStart={() => setIsStarted(true)}
         onStop={() => setIsStarted(false)}
         onComplete={() => {setIsStarted(false); setShowModal(true)}}

      />
   )
};