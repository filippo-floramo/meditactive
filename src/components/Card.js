import React from "react";

/**il conditional rendering è da fare sul "type"  del cardDAta per quanto riguarda la dark mode con la funzione oclick
 * 
 * FUNZIONA DAI CAZZO
*/

export default function Card(props) {

   /**questa funzione va portata nel  Context API */

   function chill() {
      if(props.data.type === "Sleep") {
         console.log("ciao");
      }else {
         console.log ("CIAO AL QUADRATO")
      }
   }



   return (
      <div onClick={chill} className="card">
         <h1>{props.data.type}</h1>
      </div>
   )
}