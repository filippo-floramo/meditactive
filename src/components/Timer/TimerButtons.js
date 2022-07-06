import React from "react";





export default function TimerButtons(props) {

   return (
      <div className={props.type}>
         <button className="buttons">{props.min}</button>
         <button className="buttons">{props.secs}</button>
      </div>
   )
}