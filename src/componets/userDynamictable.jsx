import { Table } from "react-bootstrap";
   
function UserDynamictable (){
    const users = [
        { name: "Alice", age: 25, email: "alice@gmail.com" },
        { name: "Boby", age: 32, email: "bob@example.com" },
        { name: "Charlie", age: 22, email: "charlie@example.com" },
        { name: "David", age: 28, email: "david@example.com" },
        { name: "Eva", age: 35, email: "eva@example.com" },
      ];
      function UserDynamicDetails (value){
        return ( 
            <tr>
           <td>1</td>
           <td>{value.name}</td>
           <td>{value.age}</td>
           <td>{value.email}</td>
           </tr>
        )   
     } 
return (
     <>
     <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
             {users.map(UserDynamicDetails)}
        </tbody>
      </Table>
      </>
      )
    };
     
    export default UserDynamictable;      
