import React, { useState } from "react";
import { Model } from "./model";
const ModelContainer = ()=>{
           const [show, setshow] = useState(false);
       const OpenModel = ()=>{
              setshow(true);
       };
      
       const closeModel = ()=>{
        setshow (false);
       }
    return (
         <div>
            <button onClick={OpenModel}> show model</button>
            {show && <Model closeModel={closeModel}/>}

         </div>
    )
}
export default ModelContainer