import React from "react";
import { useContext } from "react";
import Context from "../../context";








export default function TimerButtons(props) {

   const { countdown, setIsPlay } = useContext(Context);

   const playTimer = () => {
      setIsPlay( prevState => prevState += 50000)
   }

   return (
      <div className={props.type}>
         <button className="buttons" onClick={playTimer}>{props.min}</button>
         <button className="buttons">{props.secs}</button>
      </div>
   )
}