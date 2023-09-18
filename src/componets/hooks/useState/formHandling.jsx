import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


export const FormHandling = () => {
  const [formData, setFormData] = useState({ userName: "", password: "",email:"" });
    // console.log(formData)

    const [errorMsg, setErrormsg] = useState ({
        userName : "",
        password: "",
        email : "",
    }) ;
     
    const Emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    const passwordpattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


  const submit = (e) => {
    e.preventDefault();
     console.log("form submitted", formData);

   

      
  };

  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>userName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter userName"
            value={formData.userName}
          
          />
          <p style={{color : "red"}}>{errorMsg.userName}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={formData.email}
           
          />
          <p style={{color: "red"}}>{errorMsg.email}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
          
          />
          <p style={{color : "red"}}>{errorMsg.password}</p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
