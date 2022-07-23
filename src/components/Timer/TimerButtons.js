import React from "react";
import { useContext } from "react";
import Context from "../../context";
import { motion } from "framer-motion"


const buttonVariants = {
   hover: {
      scale: 1.2,
      transition: {
         scale: { duration: 0.2 }
      }
   },
}





export default function TimerButtons(props) {

   const { setTimerCount, isStarted } = useContext(Context);


   const updateTimer = (countValue) => {

      switch (props.type) {

         case "increment":
            setTimerCount(prevState => prevState + countValue);
            break;

         case "decrement":
            setTimerCount(prevState => {
               let delta = prevState - countValue;

               if (delta > 0) {
                  return prevState - countValue;
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
      <>
         {
            isStarted === false &&
            (
               <div className={props.type}>
                  <motion.button className="buttons" onClick={() => updateTimer(props.minutesValue)}
                     variants={buttonVariants}
                     whileHover="hover"
                  >
                     {props.minutes}
                  </motion.button>
                  <motion.button className="buttons" onClick={() => updateTimer(props.secondsValue)}
                     variants={buttonVariants}
                     whileHover="hover"
                  >
                     {props.seconds}
                  </motion.button>
               </div>
            )
         }
      </>
   );
}