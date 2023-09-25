import React, { useRef, useState } from "react";

const UseCase = ()=>{

    const [value, Setvalue] = useState ("")

    const ButtonRef = useRef();
    const InputRef = useRef ();
  
  const Change = ()=>{
     
    Setvalue (InputRef.current.value)
  }

  const Click = ()=>{
     console.log(ButtonRef);
     InputRef.current.focus();
     ButtonRef.current.style.backgroundColor = "red"
     InputRef.current.style.backgroundColor = "green";
  }
    return (
    <div>
        <input type="text"  onChange={Change} ref={InputRef}/>
        <br />
        <button onClick={Click} ref={ButtonRef}>click</button>
    </div>


    )
};

export default UseCase;
