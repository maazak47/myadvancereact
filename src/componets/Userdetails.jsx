function Userdetails (userdetal){
    console.log(userdetal);
  return (
    <>
    <h1>name:{userdetal.name}</h1>
    <h1>age:{userdetal.age}</h1>
    <h1>city:{userdetal.city}</h1>
    </>
  );
};

//destructure 
export function DSUSerdetails ({name, age, city}){
    return (
        <>
        <h2>name:{name}</h2>
        <h2>age:{age}</h2>
        <h2>city:{city}</h2>
        </>

    );
};


export default Userdetails;