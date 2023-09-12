import { useState } from "react";

const Rectangle = ()=>{

    const [AddRectangle, setRectangle] = useState ([""])
   const AddR = ()=>{
      setRectangle ([...AddRectangle, ""])
   }

  return (
    <>
    {AddRectangle.map(()=>{return(
        <div style={{
          width : "250px",
          height : "150px",
          backgroundColor : "red",
        }}>
        </div>
    )})}
   
   <br />
    {AddRectangle.length <5 && <button onClick={AddR}>add</button>}
  </>
  )
};
export default Rectangle;