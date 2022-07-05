import React from "react";


export default function Timer() {
   return (

      <main className="timer--container">
         <div className="timer--container--sections">

            <div className="decrement--buttons">
               <button>-30s </button>
               <button>-5m </button>
            </div>

            <div className="time--display">
               <div className="time">
                  <h3>00:00</h3>
               </div>
               <div className="play">
                  Ciaso
               </div>
            </div>

            <div className="increment--buttons">
               <button> +30s </button>
               <button> +5m </button>
            </div>
         </div>
      </main>
   )
}