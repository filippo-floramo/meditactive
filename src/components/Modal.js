import React, { useContext } from "react";
import Context from "../context";






export default function Modal() {

   const { showQuote, apiQuote,  showModal, setShowModal } = useContext(Context);


   return (
      <>
         {
            showModal &&
            (
               <div className="backdrop">
                  <div className="modal">
                     <h2>The day is yours, find what else you can do to fell better</h2>
                     {showQuote && <p className="modal--activity">{apiQuote}</p>}
                     <button className="modal--close--button" onClick={() => { setShowModal(false) }}>Close</button>
                  </div>
               </div>
            )
         }
      </>
   )
}