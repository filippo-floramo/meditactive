import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import Context from "../../context";
import { useContext } from "react";



export default function TimerCountdown() {

   const { countdown, timerCount, setIsStarted, setShowModal, isDark } = useContext(Context);

   const style = {
      color: isDark ? "#00ff7f" : "#001b87",
   }

   const timerComplete = () => {
      timerCount > 0 && setShowModal(true);
      setIsStarted(false);
   }

   const renderer = ({ minutes, seconds, hours }) => {

      return (
         <div className="timer" style={style}>
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
         onStart={() => { setIsStarted(true) }}
         onStop={() => { setIsStarted(false) }}
         onComplete={() => { timerComplete() }}
      />
   )
};