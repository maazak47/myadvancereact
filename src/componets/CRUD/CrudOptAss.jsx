import React, { useState } from "react"
import { Button, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CurdOptAss = ()=>{

    const [users, setusers] = useState ([]);
   // console.log(users)
    
   const [editindex, SetEditindex] = useState (null)

    const {register, handleSubmit,formState, reset, }= useForm()

    const {errors} = formState ;
        
    const submit = (userData) => {
    //  console.log(userData);
    if (editindex === null){
        setusers ([...users, userData]) ;
        reset();
    }
     if (editindex != null){
      const NewArr = users.map((value, index)=>{
             if (editindex === index){
               return userData ;
             } else {
              return value ;
             };
      }) ;

      setusers (NewArr);
      SetEditindex (null) ;


     }

     reset({ name: "", age: "", address: "", gender: "" });
  };

      const OnDelet = (userindex)=>{
         const newarr = users.filter((value, index)=>{
            if (userindex !== index){
                return value ;
            }
         })
         setusers(newarr)
      }

      const OnEdit= (value,index)=>{
         // console.log(value)
         reset (value);
         SetEditindex(index);

      }
    return(
        <div>
            <div>
                <h1>create users from hear</h1>
                
                <Form onSubmit={handleSubmit(submit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              {...register("name",
              {required : {value : true, message : "plz enter your name"}})}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              {...register("age" ,
              {required : {value : true , message : "enter your age"}})}
            />
          </Form.Group>

          <div>
            <Form.Select
              aria-label="Default select example"
              {...register("gender", 
              {required : {value :true , message : "plz select your gender"}})}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              {...register("address" ,
              {required : true, message : "enter your address"})}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
            </div>
             
             <div>
             <h1>read users from hear</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th> Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
               {users.map ((value , index)=>{
                 return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                        <td>{value.address}</td>
                        <Button onClick={()=>{OnDelet(index)}}>Delete</Button>
                        <Button onClick={()=>{OnEdit(value, index)}}>Edit</Button>
                    </tr>
                 )
               })}
          </tbody>
        </Table>
             </div>

            
        </div>


    )
};

export default CurdOptAss;