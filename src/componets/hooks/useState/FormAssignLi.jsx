import React from "react"
import { useForm } from "react-hook-form"

const FormAssignLi = ()=>{

    const { register, handleSubmit, formState,reset } = useForm();
    
      const {errors} = formState ;
      // console.log(errors)

    const submit = (userdata)=>{
     console.log(userdata) ;
     reset();
    };

    return(
         <div>
     <form  onSubmit={handleSubmit(submit)} >
          <fieldset>
                
       

                 <div>
                     <select {...register("lang",
                     {required: {value : true, message : "plz select your lang"},})} >
                     <option value="">lang select</option>
                         <option value="hindi">hindi</option>
                         <option value="english">english</option>
                         <option value="urdu">urdu</option>
                     </select>
                     <p style={{ color: "red" }}>{errors.lang?.message}</p>
                 </div> 
 
                 <div>
                     <label htmlFor="">First name :</label>  
                     <input type="text"  {... register("firstname",
                     { required :{value : true, message : "enter first name"} })}/>
                   <p style={{ color: "red" }}>{errors?.firstname?.message}</p>
                 </div> <br />
                 <div><label htmlFor="">last Name :</label>
                 <input type="text"   {...register("lname",
                 {required :{value : true , message : "enter last name"}})} />
                 <p style={{color : "red" }}>{errors.lname?.message}</p>
                 </div> <br />
                 <div>
                     <label htmlFor="">gender :</label>
                     <input type="radio" name="gender" value="male" {...register("gender",
                      {required : {value : true, message : "plz select you gender"}})} /> male
                     <input type="radio" name= "gender" value="female" {...register("gender")} /> female
                     <p style={{color : "red"}}>{errors.gender?.message}</p>
                 </div>
                 <div>
                     <label htmlFor="">Email :</label>
                     <input type="email" {...register("email",
                      {required : {value : true , message : "plz enter your email"}})} />
                     <p style={{color : "red"}}>{errors.email?.message}</p>
                 </div>
 
                 <div>
                     <label htmlFor="">phone :</label>
                     <input type="tel" {...register("phone")} />
                     <p style={{color : "red"}}>{}</p>
                 </div>
                 <div>
                     <label htmlFor="">Date of birth :</label>
                     <input type="date" {...register("dob")} />
                     <p style={{color : "red"}}>{}</p>
                 </div>
                 <div>
                     <label htmlFor="">Address</label> <br />
                     <textarea name="address" id="" cols="30" rows="10" {...register("address")}  ></textarea>
                     <p style={{color : "red"}}>{}</p>
                 </div>
                 <button variant="primary" type="submit">submit</button>
                             </fieldset>
         </form>
        </div>
     )

};

export default FormAssignLi;