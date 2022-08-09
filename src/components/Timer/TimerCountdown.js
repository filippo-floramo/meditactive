import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import Context from "../../context";
import { useContext } from "react";
import sound from "../../sounds/shitreal.mp3"



export default function TimerCountdown() {

   const { countdown, timerCount, setIsStarted, setShowModal, useAudio } = useContext(Context);
   const [playSound, pauseSound, clearSound] = useAudio(sound);



   console.log("rirenderizzato");

   const timerComplete = () => {
      timerCount > 0 && setShowModal(true);
      setIsStarted(false);
      clearSound();
   }

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
         onStart={() => { setIsStarted(true); playSound() }}
         onPause={() => pauseSound()}
         onStop={() => { setIsStarted(false); clearSound() }}
         onComplete={() => { timerComplete() }}

      />
   )
};