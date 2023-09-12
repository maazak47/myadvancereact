import React, { useState } from "react";

const ShowImg = ()=>{
     
    const [showimg, setshowimg] = useState (false)
 const Viewimg = ()=>{
        setshowimg(! showimg)
 }
     

return (
<div>
{ showimg === true && ( <img src="https://th.bing.com/th/id/OIP._RhgQsm6JIki2j75xgSy7QHaEK?pid=ImgDet&rs=1" alt="img" />)
} <br /> <br /> 
             
             <button onClick={Viewimg}>{showimg === true ? "hide" : "view"}</button>
        </div>
    )
};

export default ShowImg;