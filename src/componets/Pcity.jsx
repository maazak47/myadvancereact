function Pcity({details}){
    //console.log(details);
    const {
        name,
        state = "undefned",
        code,
        popularPlace = "undefined",
        population,
        img,
    } = details;    
     return (
      <div className="pcity">
      <h1> {name} </h1>
      <h2> {code} </h2>
     <h3>   {popularPlace}  </h3>
      <h4> {population}  </h4>
      <h5>     </h5>
      <img src={img} alt="" />
      </div>
   );
};

export default Pcity;