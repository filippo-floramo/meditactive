import React, { useContext } from "react";
import Context from "../context";
import { motion } from "framer-motion";






export default function Modal() {

   const { showQuote, apiQuote, showModal, setShowModal } = useContext(Context);

   const modalVariants = {
      hidden: {
         y: -300
      },
      visible: {
         y: 10,
         transition: {
            y: {
               type: "spring",
               mass: 1.5,
               stiffness: 80
            }
         }
      },
   }

   return (
      <>
         {
            showModal &&
            (
               <div className="backdrop">
                  <motion.div
                     className="modal"
                     variants={modalVariants}
                     initial="hidden"
                     animate="visible"
                  >
                     <h2>Well done! <br /> Here's a quote for you to keep in mind for the rest of the day.  </h2>
                     {showQuote && <p className="modal--activity">{apiQuote}</p>}
                     <button className="modal--close--button" onClick={() => { setShowModal(false) }}>Close</button>
                  </motion.div>
               </div>
            )
         }
      </>
   )
}