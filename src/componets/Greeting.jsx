function Greeting (props){
    console.log(props)
    return (
        <>
        <h1> HEllo! </h1>
        <p>my name is {props.data}</p>
        <h1>good morning {props.name}</h1>
        </>

    ) ;

   
}

export default Greeting;