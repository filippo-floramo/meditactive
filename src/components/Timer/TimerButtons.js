import React from "react";
import { useContext } from "react";
import Context from "../../context";








export default function TimerButtons(props) {

   const { lol } = useContext(Context);

   const playTimer = () => {
      console.log(lol.current)
      lol.current.start()
   }

   return (
      <div className={props.type}>
         <button className="buttons" onClick={playTimer}>{props.min}</button>
         <button className="buttons">{props.secs}</button>
      </div>
   )
}