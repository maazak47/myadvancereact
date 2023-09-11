import React, { useState } from "react";


   
   const FullName = ()=>{

    const [details, setdetails] = useState({name : "maaz", address : "nzb"})
    const InfoBUtton = ()=>{
        setdetails ( {name : "mohammed Altamas", address : "nizamabad"})
    };
      return (
        <>
        <h1>name : {details.name}</h1>
        <h1>address : {details.address}</h1>
        <button onClick={InfoBUtton}>get full info</button>
        </>
    )
};

export default FullName;