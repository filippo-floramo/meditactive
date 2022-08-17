
import { createContext, useState, useRef, useEffect } from "react";



const Context = createContext();

export function ContextProvider({ children }) {

   const [isDark, setIsDark] = useState(localStorage.getItem('dark-mode') === 'true');

   const [timerCount, setTimerCount] = useState(6000);

   const [isStarted, setIsStarted] = useState(false);

   const [showModal, setShowModal] = useState(false);

   const [apiQuote, setApiQuote] = useState("");

   const [showQuote, setShowQuote] = useState(false);


   const countdown = useRef(null);


   function pickMode(item) {
      if (item === "Deep") {
         setIsDark(true);
      } else {
         setIsDark(false)
      }
   }


   const useAudio = url => {
      const [audio] = useState(new Audio(url));
      const [playing, setPlaying] = useState(false);

      const playSound = () => setPlaying(true);
      const pauseSound = () => setPlaying(false);
      const clearSound = () => { setPlaying(false); audio.currentTime = 0 };

      useEffect(() => {
         if (showModal) { clearSound() };
      })

      useEffect(() => {
         audio.loop = true;
         playing ? audio.play() : audio.pause();

      }, [playing, audio]);

      return [playSound, pauseSound, clearSound];
   };

   useEffect(() => {
      localStorage.setItem("dark-mode", isDark)
   }, [isDark]);


   useEffect(() => {

      const axios = require("axios");

      axios.get("https://api.quotable.io/random?tags=wisdom,famous-quotes")
         .then(response => {
            const data = response.data.content;
            setApiQuote(data);
            setShowQuote(true);
            console.log(response);
         })
         .catch(err => console.error(err));

   }, []);



   return (
      <Context.Provider value={{
         pickMode,
         isDark,
         countdown,
         timerCount,
         setTimerCount,
         isStarted,
         setIsStarted,
         showModal,
         setShowModal,
         apiQuote,
         showQuote,
         setShowQuote,
         useAudio
      }}>
         {children}
      </Context.Provider>
   )

}

export default Context;