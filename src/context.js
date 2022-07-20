import { createContext, useState, useRef } from "react";



const Context = createContext();

export function ContextProvider({ children }) {

   const [isSleep, setIsSleep] = useState(false);

   const [timerCount, setTimerCount] = useState(0);

   const [isStarted, setIsStarted] = useState(false);

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


   const countdown = useRef(null);




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

      }}>
         {children}
      </Context.Provider>
   )

}

export default Context;