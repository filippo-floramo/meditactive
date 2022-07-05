import { createContext, useState } from "react";



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


   return (
      <Context.Provider value={{
         cardData,
         chill,
         isSleep,

      }}>
         {children}
      </Context.Provider>
   )

}

export default Context;