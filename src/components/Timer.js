import React from "react";

// import playButton from "../img/play-button.svg"
import pauseButton from "../img/pause-button.svg"

export default function Timer() {
   return (

      <main className="timer--container">
         <div className="timer--container--sections">

            <div className="decrement ">
               <button className="buttons">-5m </button>
               <button className="buttons">-30s </button>
            </div>

            <div className="time--display">
               <div className="time">
                  <h3>00:00</h3>
               </div>
               <div className="play">
                  <img className="play--button" src={pauseButton} alt="play" />
               </div>
            </div>

            <div className="increment">
               <button className="buttons"> +5m </button>
               <button className="buttons"> +30s </button>
            </div>
         </div>
      </main>
   )
}