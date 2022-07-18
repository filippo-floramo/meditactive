import { createContext, useState, useRef } from "react";



const Context = createContext();

export function ContextProvider({ children }) {

   const [isSleep, setIsSleep] = useState(false);

   const [isPlay, setIsPlay] = useState(5000);

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
         isPlay,
         setIsPlay,

      }}>
         {children}
      </Context.Provider>
   )

}

export default Context;