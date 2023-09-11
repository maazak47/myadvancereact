import { useState} from "react";

function Counter (){
  const [count, setCount] = useState(0);

   
   function Click (){
    if (count < 10){
    setCount(count + 1)
   } }
   function ClickO (){
    if(count > 0){
    setCount(count - 1)
   }}

    return(
 <>
   <h1>{count}</h1>
   <button onClick={Click}>increment +</button>
   <button onClick={ClickO}>decerment -</button>
  
  
   
 </>
      

      
    )

}



export default Counter;