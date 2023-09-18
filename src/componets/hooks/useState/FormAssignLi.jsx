import React from "react"
import { useForm } from "react-hook-form"

const FormAssignLi = ()=>{

    const { register, handleSubmit, formState, } = useForm()
    
      const {errors} = formState
     // console.log(errors)

    const submit = (userdata)=>{
     console.log(userdata) ;
    }

    return(
        <div>
         <form  onSubmit={handleSubmit(submit)} >
             <fieldset>
                 <div>
                     <select name="" id="" {...register("lang")} >
                     <option value="select lang">lang select</option>
                         <option value="hindi">hindi</option>
                         <option value="english">english</option>
                         <option value="urdu">urdu</option>
                     </select>
                     <p style={{color : "red"}}>{}</p>
                 </div>
 
                 <div>
                     <label htmlFor="">First name :</label>  
                     <input type="text"  {... register("fname" ,
                     { require :{value :true, message : "user name requried"} })}/>
                     <p style={{color : "red"}}>{errors?.fname?.message}</p>
                 </div> <br />
                 <div><label htmlFor="">last Name :</label>
                 <input type="text"   {...register("lname")} />
                 <p style={{color : "red"}}>{}</p>
                 </div> <br />
                 <div>
                     <label htmlFor="">gender :</label>
                     <input type="radio" name="gender" value="male" {...register("gender")} /> male
                     <input type="radio" name= "gender" value="female" {...register("gender")} /> female
                     <p style={{color : "red"}}>{}</p>
                 </div>
                 <div>
                     <label htmlFor="">Email :</label>
                     <input type="email" {...register("email")} />
                     <p style={{color : "red"}}>{}</p>
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

}

export default FormAssignLi;