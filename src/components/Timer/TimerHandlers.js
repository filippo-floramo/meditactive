import React from "react";
import { useContext } from "react";
import Context from "../../context";



export default function TimerHandlers() {


   const { countdown, isPlay } = useContext(Context);




   return (

      <div className="time--handlers">
         {isPlay && <button className="handler pause" onClick={() => { countdown.current.pause() }}>Pause</button>}
         <button className="handler play" onClick={() => { countdown.current.start() }
         }>Play</button>
         <button className="handler reset" onClick={() => { countdown.current.stop() }}>Reset</button>
      </div>
   )
}