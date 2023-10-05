import React, { useMemo, useState } from "react";

const UseCase1 = ()=>{

   const [counter1 , Setcounter1] = useState(0);
   const [counter2, Setcounter2] = useState(0);
     
   const val = useMemo(()=>{
    for (let i = 0; i <100000; i++) {
        console.log(i);
        }
        return counter1*2;
   },[counter1]);

   
      
    return (
        <div>
            <h1>counter 1 : {counter1}</h1>
            <button onClick={()=>Setcounter1(counter1+1)}>incerement 1</button>
            <p>complex calculation :{val} </p>

            <br />

            <h1>counter 2 : {counter2}</h1>
            <button onClick={()=>Setcounter2(counter2+1)}>incerement 2</button>
            <p>complex calculation</p>
        </div>
    )
};

export default UseCase1;