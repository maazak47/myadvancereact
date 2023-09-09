import { useState} from "react";

function Counter (){
  const [count, setCount] = useState(0);
   function click (){
    setCount(count + 1)
   }
   function ClickO (){
    setCount(count - 1)
   }

    return(
 <>
   <h1>{count}</h1>
   <button onClick={click}>increment +</button>
   <button onClick={ClickO}>decerment -</button>
  
  
   
 </>
      

      
    )

}



export default Counter;