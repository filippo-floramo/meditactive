import React from "react";
import { useContext } from "react";
import Context from "../../context";
import sound from "../../sounds/shitreal.mp3"




export default function TimerHandlers() {


   const { countdown, timerCount, isStarted, setTimerCount, useAudio } = useContext(Context);
   const [toggle] = useAudio(sound);






   return (

      <div className="time--handlers">
         <button className="handler pause" onClick={() => { countdown.current.pause() }}>Pause</button>
         <button className="handler play" onClick={() => { timerCount > 0 && countdown.current.start(); toggle() }}>Start</button>
         {
            isStarted ?
               <button className="handler stop" onClick={() => { countdown.current.stop() }}>Stop</button>
               :
               <button className="handler reset" onClick={() => { setTimerCount(0) }}>Reset</button>
         }
      </div>
   )
};