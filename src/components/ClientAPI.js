import { useContext,useEffect } from "react";
import Context from "../context";



export default function ClientAPI() {

   const {setApiQuote, setShowQuote} = useContext(Context);


   useEffect(() => {
      const axios = require("axios");

      axios.get("https://api.quotable.io/random?tags=wisdom,famous-quotes")
         .then(response => {
            const data = response.data.content;
            setApiQuote(data);
            setShowQuote(true);
         })
         .catch(err => console.error(err));

   }, [setApiQuote,setShowQuote]);


};