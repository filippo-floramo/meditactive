import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
//import { useContext } from "react";
// import Context from "../context";
import darkIcon from "../img/dark-mode.svg";
import lightIcon from "../img/light-mode.svg"

const homeVariants = {
   exit: {
      opacity: 0.05,

      transition: {
         opacity: {duration: 2}
      }
   }
}


export default function Home() {

   const cardData = [
      {
         icon: lightIcon,
         type: "Chill"
      },
      {
         icon: darkIcon,
         type: "Sleep"
      },
   ];


   const cards = cardData.map((item) => {
      return <Card data={item} key={item.type} />
   })



   return (
      <motion.main className="landing"
         variants={homeVariants}
         exit="exit"
         >

         <h1 className="landing--welcome">Hey, how do you wan to feel right now? </h1>

         <section className="landing--cards">
            {cards}
         </section>
      </motion.main>
   )
};