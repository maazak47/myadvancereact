import React, { useState } from "react";

     const  FormAssign = ()=>{

        const [formdata, setformdata] = useState ({
            lang: "",
            fname : "",
            lname : "",
            gender : "",
            email : "",
            dob : "",
            address : "",
            phone : "",
        });

        const [errorMsg, setErrormsg] = useState ({
            lang: "",
            fname : "",
            lname : "",
            gender : "",
            email : "",
            dob : "",
            address : "",
            phone : "",
        });
         
         const Emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
         const phonevalidation = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
       
        const submit = (e) => {
            e.preventDefault();
            console.log("form submitted", formdata);
            // validation for lang
           if(formdata.lang.length <=0){
            setErrormsg((prev)=>{
              return {...prev, lang : "select your lang"}
            })
           } else {
            setErrormsg((prev)=>{
                    return {...prev , lang : ""}
            })
           };
          
           // validation for firstname

           if(formdata.fname.length<=0){
            setErrormsg((prev)=>{
                return {...prev , fname : "enter your first name"}
            })
           } else{
            setErrormsg ((prev)=>{
                 return {...prev, fname : "" }
            })
           };
            // validation for last name

           if(formdata.lname.length<=0){
            setErrormsg((prev)=>{
                return {...prev, lname: "enter your last name" }
            })
           } else{
            setErrormsg ((prev)=>{
                 return {...prev, lname : ""}
            })
           };

           // validation for gender

           
           if(formdata.gender.length<=0){
            setErrormsg((prev)=>{
                return {...prev, gender : "select your gender"}
            })
           } else{
            setErrormsg ((prev)=>{
                 return {...prev,  gender : "" }
            })
           };
          
           // validation for email
           
           if(formdata.email.length<=0){
            setErrormsg((prev)=>{
                return {...prev, email : "enter your email" }
            })
           }  else if (Emailpattern.test(formData.email)===false){
            setErrormsg((prev)=>{
              return ({...prev, email : "plz enter valid email"})
            })
      }
            else{
            setErrormsg ((prev)=>{
                 return {...prev, email : "" }
            })
           };

           // validation of phone
         if(formdata.phone.length<=0){
            setErrormsg((prev)=>{
                return({...prev, phone : "enter your phone number"})
            })
        }else if (phonevalidation.test(formdata.phone)===false){
            setErrormsg((prev)=>{
                return {...prev, phone : "enter valid number"}
            })

        } else {
            setErrormsg ((prev)=>{
              return ({...prev, phone : ""})
             })

        }

           // validation for dob

           if(formdata.dob<=0){
            setErrormsg((prev)=>{
                return {...prev, dob: "select your dob" }
            })
           } else{
            setErrormsg ((prev)=>{
                 return {...prev, dob : "" }
            })
           };
              // validation for address

           
              if(formdata.address.length<=0){
                setErrormsg((prev)=>{
                    return {...prev, address : "enter your address" }
                })
               } else{
                setErrormsg ((prev)=>{
                     return {...prev, address : "" }
                })
               };   

        }

         return(
       <div>
        <form onSubmit={submit}>
            <fieldset >
                <div>
                    <select name="" id=""   onChange={(e)=>{setformdata({...formdata, lang : e.target.value})}}>
                    <option value="select lang">lang select</option>
                        <option value="hindi">hindi</option>
                        <option value="english">english</option>
                        <option value="urdu">urdu</option>
                    </select>
                    <p style={{color : "red"}}>{errorMsg.lang}</p>
                </div>

                <div>
                    <label htmlFor="">First name :</label>  
                    <input type="text" value={formdata.fname} onChange={(e)=>{setformdata({...formdata, fname : e.target.value})}} />
                    <p style={{color : "red"}}>{errorMsg.fname}</p>
                </div> <br />
                <div><label htmlFor="">last Name :</label>
                <input type="text"  value={formdata.lname}  onChange={(e)=>{setformdata({...formdata, lname : e.target.value})}} />
                <p style={{color : "red"}}>{errorMsg.lname}</p>
                </div> <br />
                <div>
                    <label htmlFor="">gender :</label>
                    <input type="radio" name="gender" value="male" checked={formdata.gender==="male"} onChange={(e)=>{setformdata({...formdata, gender : e.target.value})}}/> male
                    <input type="radio" name= "gender" value="female" checked={formdata.gender==="female"} onChange={(e)=>{setformdata({...formdata, gender : e.target.value})}}/> female
                    <p style={{color : "red"}}>{errorMsg.gender}</p>
                </div>
                <div>
                    <label htmlFor="">Email :</label>
                    <input type="email" value={formdata.email} onChange={(e)=>{setformdata({...formdata, email : e.target.value})}}/>
                    <p style={{color : "red"}}>{errorMsg.email}</p>
                </div>

                <div>
                    <label htmlFor="">phone :</label>
                    <input type="tel" onChange={(e)=>{setformdata({...formdata, phone: e.target.value})}} />
                    <p style={{color : "red"}}>{errorMsg.phone}</p>
                </div>
                <div>
                    <label htmlFor="">Date of birth :</label>
                    <input type="date" value={formdata.dob} onChange={(e)=>{setformdata({...formdata, dob : e.target.value})}} />
                    <p style={{color : "red"}}>{errorMsg.dob}</p>
                </div>
                <div>
                    <label htmlFor="">Address</label> <br />
                    <textarea name="address" id="" cols="30" rows="10" value={formdata.address}  onChange={(e)=>{setformdata({...formdata, address : e.target.value})}}></textarea>
                    <p style={{color : "red"}}>{errorMsg.address}</p>
                </div>
                <button variant="primary" type="submit">submit</button>
                            </fieldset>
        </form>
       </div>
    )
};

export default FormAssign;