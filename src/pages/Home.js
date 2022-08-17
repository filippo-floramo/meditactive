import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import darkIcon from "../img/dark-mode.svg";
import lightIcon from "../img/light-mode.svg"
import Navbar from "../components/Navbar";



export default function Home() {
   
   const homeVariants = {
   
      hidden: { opacity: 0.3 },
   
      visible: {
         opacity: 1,
         transition: {
            opacity: { duration: 1 },
         }
      },
   
      exit: {
         opacity: 0.05,
   
         transition: {
            opacity: { duration: 2 }
         }
      }
   }
   const cardData = [
      {
         icon: lightIcon,
         type: "Light"
      },
      {
         icon: darkIcon,
         type: "Deep"
      },
   ];


   const cards = cardData.map((item) => {
      return <Card data={item} key={item.type} />
   })



   return (
      <motion.main className="landing"
         variants={homeVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
      >
         <Navbar id="home" />

         <h1 className="landing--welcome">Hello!<br/> Choose how you want your session to be.</h1>
         <section className="landing--cards">
            {cards}
         </section>
      </motion.main>
   )
};