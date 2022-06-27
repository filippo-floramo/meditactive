import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import Context from "../context";


export default function Home() {

   const { cardData } = useContext(Context);


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
}