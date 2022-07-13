import { createContext, useState, useRef } from "react";



const Context = createContext();

export function ContextProvider({ children }) {

   const [isSleep, setIsSleep] = useState(false);

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

   const lol = useRef(null);


   return (
      <Context.Provider value={{
         cardData,
         chill,
         isSleep,
         lol

      }}>
         {children}
      </Context.Provider>
   )

}

export default Context;