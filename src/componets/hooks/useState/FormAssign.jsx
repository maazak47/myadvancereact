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
        });
    
        const submit = (e) => {
            e.preventDefault();
            console.log("form submitted", formdata);
            setformdata({   
             lang: "",
            fname : "",
            lname : "",
            gender : "",
            email : "",
            dob : "",
            address : "",})
          };

      
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
                </div>

                <div>
                    <label htmlFor="">First name :</label>  
                    <input type="text" value={formdata.fname} onChange={(e)=>{setformdata({...formdata, fname : e.target.value})}} />
                </div> <br />
                <div><label htmlFor="">last Name :</label>
                <input type="text"  value={formdata.lname}  onChange={(e)=>{setformdata({...formdata, lname : e.target.value})}} />
                </div> <br />
                <div>
                    <label htmlFor="">gender :</label>
                    <input type="radio" name="gender" value="male" checked={formdata.gender==="male"} onChange={(e)=>{setformdata({...formdata, gender : e.target.value})}}/> male
                    <input type="radio" name= "gender" value="female" checked={formdata.gender==="female"} onChange={(e)=>{setformdata({...formdata, gender : e.target.value})}}/> female
                </div>
                <div>
                    <label htmlFor="">Email :</label>
                    <input type="email" value={formdata.email} onChange={(e)=>{setformdata({...formdata, email : e.target.value})}}/>
                </div>
                <div>
                    <label htmlFor="">Date of birth :</label>
                    <input type="date" value={formdata.dob} onChange={(e)=>{setformdata({...formdata, dob : e.target.value})}} />
                </div>
                <div>
                    <label htmlFor="">Address</label> <br />
                    <textarea name="address" id="" cols="30" rows="10" value={formdata.address}  onChange={(e)=>{setformdata({...formdata, address : e.target.value})}}></textarea>
                </div>
                <button variant="primary" type="submit">submit</button>
                            </fieldset>
        </form>
       </div>
    )
};

export default FormAssign;