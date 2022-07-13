import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import Context from "../../context";
import { useContext } from "react";


export default function TimerCountdown() {

   const { lol } = useContext(Context)

   const renderer = ({ minutes, seconds }) => {


      return (
         <h3>{zeroPad(minutes)}:{zeroPad(seconds)}</h3>
      )

   };

   return (
      <Countdown
         date={Date.now() + 5000}
         renderer={renderer}
         autoStart={false}
         ref={lol}

      />
   )
};