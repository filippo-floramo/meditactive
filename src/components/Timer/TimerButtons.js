import React from "react";
import { useContext } from "react";
import Context from "../../context";








export default function TimerButtons(props) {

   const { setTimerCount } = useContext(Context);

   const updateTimer = (countValue) => {

      if (props.type === "increment") {
         setTimerCount(prevState => prevState += countValue);

      } else if (props.type === "decrement") {
         setTimerCount(prevState => {
            let delta = prevState - countValue;

            if (delta > 0) {
               return prevState -= countValue;
            } else {
               return prevState = 0;
            }
         });
      }
   }

   return (
      <div className={props.type}>
         <button className="buttons" onClick={() => updateTimer(props.minutesValue)}>{props.minutes}</button>
         <button className="buttons" onClick={() => updateTimer(props.secondsValue)}>{props.seconds}</button>
      </div>
   )
}