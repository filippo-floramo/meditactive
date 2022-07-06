import React from "react";
import Wave from "react-wavify";



export default function TimerWaves() {
   return (
      <div className="wave--container">
         <Wave
         className="wave2"
            fill="url(#a)"
            options={
               {
                  points: 2,
                  amplitude: 40
               }
            }>
            <defs>
               <linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
                  <stop stop-color="#20A4F3" stop-opacity=".25" offset="0%" />
                  <stop stop-color="#182B3A" offset="100%" />
               </linearGradient>
            </defs>
         </Wave>
         <Wave
            className="wave"
            fill="url(#a)"
            options={
               {
                  points: 2,
                  amplitude: 60
               }
            }>
            <defs>
               <linearGradient id="a" x1="50%" x2="50%" y1="-10.959%" y2="100%">
                  <stop stop-color="#20A4F3" stop-opacity=".25" offset="0%" />
                  <stop stop-color="#182B3A" offset="100%" />
               </linearGradient>
            </defs>
         </Wave>

      </div>

   )
}