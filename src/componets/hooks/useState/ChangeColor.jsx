import { useState } from "react";

function ChangeColor(){
    
 const [color, Setcolor] = useState("pink")
 const Onover = ()=>{
    Setcolor ("red");
};
  const Onleave = ()=>{
    Setcolor ("pink");
  };
  
 return(
 <h1 onMouseOver={Onover}  onMouseLeave={Onleave} style={{color:color} }> maaz</h1>
    )

};




export default ChangeColor;