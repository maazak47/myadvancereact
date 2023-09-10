import React, { useState } from "react";

export const AddRectangle = () =>{
const  [rectangle, setRectangle] = useState([""]);
 //console. log(rectangle);
const onAdd =() => {

setRectangle([...rectangle,""])
// rectangle.push("")
// console.log(rectangle)
// setRectangle(rectangle);
};
if(rectangle.length<5){
    
    return(
        <div>
        {rectangle.map(()=>{
    
          return (
          <div 
          style={{
              width:"250px",
              height: "150px",
              backgroundColor:"red",
      
          }}> </div>
          );
        })}
        
        <button onClick={onAdd}>add</button>
        </div>
         ); 
} 


};
   



