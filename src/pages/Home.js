import React from "react";
import Card from "../components/Card";


export default function Home() {

   const cardData = [
      {
         icon: "lol",
         type: "Chill"
      },
      {
         icon: "lel",
         type: "Sleep"
      },
   ]


   const cards = cardData.map((item) => {
      return <Card data={item} />
   })



   return (
      <main className="landing">
         <h1 className="landing--welcome">Hey, how do you wan to feel right now? </h1>

         <section className="landing--cards">
            {cards}
         </section>
      </main>
   )
}