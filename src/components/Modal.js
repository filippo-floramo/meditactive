import React, { useContext } from "react";
import Context from "../context";






export default function Modal() {

   const { showActivity, apiActivity, getBoredAPI, showModal, setShowModal } = useContext(Context);


   return (
      <>
         {
            showModal &&
            (
               <div className="backdrop">
                  <div className="modal">
                     <h2>The day is yours, find what else you can do to fell better</h2>
                     {showActivity && <p className="modal--activity">{apiActivity}</p>}
                     <button className="modal--show--button" onClick={() => { getBoredAPI() }} >Click Me!</button>
                     <button className="modal--close--button" onClick={() => { setShowModal(false) }}>Close</button>
                  </div>
               </div>
            )
         }
      </>
   )
}