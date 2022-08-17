import React from "react";
import { useContext } from "react";
import { motion } from "framer-motion";
import Context from "../../context";
import deepSound from "../../sounds/deep-meditation.mp3"
import lightSound from "../../sounds/light-meditation.mp3"




export default function TimerHandlers() {

   const handlerVariants = {
      hover: {
         scale: 1.2,
         transition: {
            scale: { duration: 0.13 }
         }
      },
   }

   const { countdown, timerCount, isStarted, setTimerCount, useAudio, isDark } = useContext(Context);

   const [playSound, pauseSound, clearSound] = useAudio(isDark ? deepSound : lightSound);


   return (

      <div className="time--handlers">
         <motion.button
            className="handler pause"
            onClick={() => { countdown.current.pause(); pauseSound() }}
            variants={handlerVariants}
            whileHover="hover"
         >
            Pause
         </motion.button>
         <motion.button
            className="handler play"
            onClick={() => { if (timerCount > 0) { countdown.current.start(); playSound() } }}
            variants={handlerVariants}
            whileHover="hover"
         >
            Play
         </motion.button>
         {
            isStarted ?
               <motion.button
                  className="handler stop"
                  onClick={() => { countdown.current.stop(); clearSound() }}
                  variants={handlerVariants}
                  whileHover="hover"
               >
                  Stop
               </motion.button>
               :
               <motion.button
                  className="handler reset"
                  onClick={() => { setTimerCount(0) }}
                  variants={handlerVariants}
                  whileHover="hover"
               >
                  Reset
               </motion.button>
         }
      </div>
   )
};
