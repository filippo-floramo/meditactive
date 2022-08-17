import React from "react";
import { useContext } from "react";
import Context from "../../context";
import { AnimatePresence, motion } from "framer-motion"





export default function TimerButtons(props) {

   const { setTimerCount, isStarted } = useContext(Context);

   const buttonVariants = {
      hover: {
         scale: 1.2,
         transition: {
            scale: { duration: 0.2 }
         }
      },

      exit: {
         scale: 0,
         transition: {
            scale: { duration: 0.2 }
         }
      }
   }


   const updateTimer = (countValue) => {

      switch (props.type) {

         case "increment":
            setTimerCount(prevState => prevState + countValue);
            break;

         case "decrement":
            setTimerCount(prevState => {
               let delta = prevState - countValue;

               if (delta > 0) {
                  return delta;
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
         <AnimatePresence>
            {
               isStarted === false &&
               (
                  <div className={props.type}>
                     <motion.button
                        className="buttons"
                        onClick={() => updateTimer(props.minutesValue)}
                        variants={buttonVariants}
                        key="minute"
                        whileHover="hover"
                        exit="exit"
                     >
                        {props.minutes}
                     </motion.button>
                     <motion.button
                        className="buttons"
                        onClick={() => updateTimer(props.secondsValue)}
                        variants={buttonVariants}
                        key="second"
                        whileHover="hover"
                        exit="exit"
                     >
                        {props.seconds}
                     </motion.button>
                  </div>
               )
            }
         </AnimatePresence>
      </>
   );
}