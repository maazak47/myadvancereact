import { useState } from "react";

const InputVAlue = ()=>{
  
        const [value, setvalue] =  useState("");
        const Onchange = (e)=>{
            setvalue(e.target.value);
        };


    return(
        <>
    <input type="text" onChange={Onchange} />
    <h1>{value}</h1>
    </> 
)

};

export default InputVAlue;