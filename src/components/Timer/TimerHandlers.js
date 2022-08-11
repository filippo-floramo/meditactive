import React from "react";
import { useContext } from "react";
import Context from "../../context";
import sound from "../../sounds/shitreal.mp3"




export default function TimerHandlers() {


   const { countdown, timerCount, isStarted, setTimerCount, useAudio } = useContext(Context);

   const [playSound, pauseSound, clearSound] = useAudio(sound);


   return (

      <div className="time--handlers">
         <button className="handler pause" onClick={() => { countdown.current.pause(); pauseSound() }}>Pause</button>
         <button className="handler play" onClick={() => { if (timerCount > 0) { countdown.current.start(); playSound() } }}>Start</button>
         {
            isStarted ?
               <button className="handler stop" onClick={() => { countdown.current.stop(); clearSound() }}>Stop</button>
               :
               <button className="handler reset" onClick={() => { setTimerCount(0) }}>Reset</button>
         }
      </div>
   )
};
