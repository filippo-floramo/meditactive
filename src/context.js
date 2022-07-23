import { createContext, useState, useRef, useEffect, useMemo } from "react";



const Context = createContext();

export function ContextProvider({ children }) {

   const [isSleep, setIsSleep] = useState(false);

   const [timerCount, setTimerCount] = useState(0);

   const [isStarted, setIsStarted] = useState(false);

   const [showModal, setShowModal] = useState(true);

   const [apiActivity, setApiActivity] = useState("");

   const [showActivity, setShowActivity] = useState(false);


   const countdown = useRef(null);


   const cardData = [
      {
         icon: "lol",
         type: "Chill"
      },
      {
         icon: "lel",
         type: "Sleep"
      },
   ];

   function chill(item) {
      if (item === "Sleep") {
         setIsSleep(true);
      }
   }


   const useAudio = url => {
      const [audio] = useState(new Audio(url));
      const [playing, setPlaying] = useState(false);

      const toggle = () => setPlaying(!playing);


      useEffect(() => {
         playing ? audio.play() : audio.pause();
      },
         [playing]
      );

      useEffect(() => {
         audio.addEventListener('ended', () => setPlaying(false));
         return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
         };
      }, []);

      return [toggle, playing];
   };













   async function getBoredAPI() {

      const axios = require("axios");

      try {
         const response = await axios.get('https://www.boredapi.com/api/activity?type=relaxation&maxaccessibility=0.7')
         const data = await response.data.activity;

         setApiActivity(data);
         setShowActivity(true);
         console.log(apiActivity);

      } catch (error) {
         console.error(error);
      }

   }




   return (
      <Context.Provider value={{
         cardData,
         chill,
         isSleep,
         countdown,
         timerCount,
         setTimerCount,
         isStarted,
         setIsStarted,
         showModal,
         setShowModal,
         getBoredAPI,
         apiActivity,
         showActivity,
         setShowActivity,
         useAudio


      }}>
         {children}
      </Context.Provider>
   )

}

export default Context;