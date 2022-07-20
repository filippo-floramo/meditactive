import React from "react";
import { useContext } from "react";
import Context from "../../context";








export default function TimerButtons(props) {

   const { setTimerCount } = useContext(Context);

   const updateTimer = (countValue) => {

      switch (props.type) {

         case "increment":
            setTimerCount(prevState => prevState += countValue);
            break;

         case "decrement":
            setTimerCount(prevState => {
               let delta = prevState - countValue;

               if (delta > 0) {
                  return prevState -= countValue;
               } else {
                  return prevState = 0;
               }
            });
            break;
         default:
            console.log("button type not found");

      }
   };

   return (
      <div className={props.type}>
         <button className="buttons" onClick={() => updateTimer(props.minutesValue)}>{props.minutes}</button>
         <button className="buttons" onClick={() => updateTimer(props.secondsValue)}>{props.seconds}</button>
      </div>
   );
}