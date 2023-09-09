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

export function ClickInputValue (){
     const [] = useState ("")
     const Onchange = ()=>{

     }
  
     }
    return(
   <>
   <input type="text" onChange={} />
    <br />
   <button onClick={}>click me to show value</button> <br />
   <h1>{value}</h1>
   </>
    )
}

export default InputVAlue;