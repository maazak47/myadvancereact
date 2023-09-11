import { useState } from "react";

export const NextUSer = ()=>{
    const User1 = {name :"aman", age: "25", hometown : "hyderabad"}
    const User2 = {name : "altamas", age: "23", hometown: "nizamabad"}
   
    const [user , SetUser] = useState (User1);

     const onNext = ()=>{
        if(user.name === "aman"){
        SetUser(User2)
     }else{
        SetUser(User1)
     } }

return (
    <div>
        <ol>
            <li>my name is {user.name}</li>
            <li>my age is {user.age}</li>
            <li>my homwtown is {user.hometown}</li>
        </ol>
        <button onClick={onNext}>next</button>   
    </div>
)


};