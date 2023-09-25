import React, { useEffect, useRef, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

const UseCase2 = ()=>{
      
    const [counter, Setcounter] = useState(0);
    const prev = useRef(null)
       
    useEffect(()=>{
        prev.current=counter
    },[]);
    const Click = ()=>{
        Setcounter(counter+1);  
    };
    
    return(
        <div>
           <h1>value: {counter}</h1>
           <h3>prev :{prev.current} </h3>
           <button onClick={Click}>increment+</button>
        </div>
    )
};

export default UseCase2 ;