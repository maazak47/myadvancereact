import React, { useState } from "react";

const InputValueB = ()=>{
     
         const [value, setValue] = useState ("");
         const [printValue, SetPrintValue] = useState ("")
      const OnchangeV = (e)=>{
          
           setValue (e.target.value);
      };
          
      const Click = ()=>{
        SetPrintValue (value)
   
   } 
    return (
        <div>
        <input type="text" onChange={OnchangeV}/>
        <br />
        <button onClick={Click}>click me to show input</button>
        <h1>{printValue}</h1>
        </div>
    )
};

export default InputValueB;