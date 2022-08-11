import React from "react";
import Card from "../components/Card";
//import { useContext } from "react";
// import Context from "../context";
import darkIcon from "../img/dark-mode.svg";
import lightIcon from "../img/light-mode.svg"


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
      <main className="landing">
         
         <h1 className="landing--welcome">Hey, how do you wan to feel right now? </h1>

         <section className="landing--cards">      
            {cards}       
         </section>
      </main>
   )
};